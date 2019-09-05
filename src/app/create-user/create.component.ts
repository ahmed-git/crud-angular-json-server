import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  submitted: boolean = false;
  index = 0;
  userForm: FormGroup;

  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  addUser() {
    this.submitted = true;
    if(this.userForm.valid) {
      let user = new User(this.userForm.value.firstName, this.userForm.value.lastName);
      this.service.addUser(user).subscribe();
      this.userForm.reset();
      this.submitted = false;
      this.router.navigate(['/dash/users']);
    }
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, , Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, , Validators.minLength(8)]),
    });
   }

  ngOnInit() {
    this.getUser();
  }

  updateUser(): void {
    this.user.firstName = this.userForm.controls.firstName.value;
    this.user.lastName = this.userForm.controls.lastName.value;
    this.service.updateUser(this.user).subscribe();
    this.router.navigate(['/dash/users']);
  }

  getUser(): void {
    let userId = +this.route.snapshot.paramMap.get('id');
    this.service.getUser(userId).subscribe(user => {
      this.user = user;
      this.userForm.patchValue(user);
    });   
  }
}

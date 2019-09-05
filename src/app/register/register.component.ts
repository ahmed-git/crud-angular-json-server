import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  errorRegister: string;

  constructor(private service: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.submitted = false;
   }

  ngOnInit() {
  }

  signUp() {
    if(this.form.valid) {
      this.service.signUp(this.form.controls.email.value, this.form.controls.password.value)
      .then(() => this.router.navigate(['/dash']))
      .catch(error => {
        this.errorRegister = error.message;
        this.form.controls.email.setErrors({'incorrect': true});
      });
    }

    this.submitted = false;
  }
}

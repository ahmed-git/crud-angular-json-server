import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  errorLogin: string;

  constructor(private service: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.submitted = false;
   }

  ngOnInit() {
  }


  signIn() {
    if(this.form.valid) {
      this.service.signIn(this.form.controls.email.value, this.form.controls.password.value)
      .then(() => this.router.navigate(['/dash']))
      .catch(error => {
        this.errorLogin = error.message;
        this.form.controls.email.setErrors({'incorrect': true});
      });
    }
    this.submitted = true;
  }
}



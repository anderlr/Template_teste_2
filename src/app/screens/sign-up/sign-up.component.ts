import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl,FormGroup,Validators } from '@angular/forms'
import { AuthService } from '../../_services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: "app-sign-up",
  templateUrl: "sign-up.component.html"
})
export class SignUpComponent implements OnInit {
  focus;
  focus1;
  focus2;

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  

  ngOnInit() {
  }

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    let username = this.signUpForm.get('username').value;
    let email = this.signUpForm.get('email').value;
    let password = this.signUpForm.get('password').value;

    //Testando o formulario de registro
    
    // console.log("Username:",username)
    // console.log("Email:",email)
    // console.log("Password:",password)

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["user-profile"]);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  
}


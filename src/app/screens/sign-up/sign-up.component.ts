import { Component, OnInit } from "@angular/core";
import { FormControl,FormGroup,Validators } from '@angular/forms'
// import { AuthService } from '../../_services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: "app-sign-up",
  templateUrl: "sign-up.component.html"
})
export class SignUpComponent implements OnInit {
  focus;
  focus1;
  focus2;
  constructor() {}

  ngOnInit() {}
}

export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    emailAddress: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  // constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  }

  onSubmit(): void {
    let username = this.signupForm.get('username').value;
    let emailAddress = this.signupForm.get('emailAddress').value;
    let password = this.signupForm.get('password').value;

    // this.authService.register(username, emailAddress, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.router.navigate(["user-profile"]);
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }


}
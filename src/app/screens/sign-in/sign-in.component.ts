import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
// import { TokenStorageService } from '../../_services/token-storage.service';
// import { AuthService } from '../../_services/auth.service';
// import { AuthGuardService} from '../../_services/authguard.service'
// import { Router } from '@angular/router';
// import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit, OnDestroy {

  // constructor(
  //   private authService: AuthService,
  //   private tokenStorage: TokenStorageService,
  //   private router: Router,
  //   private guard:  AuthGuardService
  //     ) {}

  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(''),
  })
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    // console.log("canActivate:",this.guard.canActivate())
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }
  ngOnDestroy() {
  }

  onSubmit(): void {
    let username = this.signinForm.get('username').value
    let password = this.signinForm.get('password').value

    // this.authService.login(username, password).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.router.navigate(["user-profile"]);
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
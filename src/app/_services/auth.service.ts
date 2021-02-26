// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { TokenStorageService } from '../_services/token-storage.service';

// const AUTH_API = 'http://localhost:8080/api/auth/';
// const TOKEN_KEY = 'auth-token';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient, private token:TokenStorageService, private jwtHelper:JwtHelperService) { }

//   login(username: string, password: string): Observable<any> {
//     return this.http.post(AUTH_API + 'signin', {
//       username,
//       password
//     }, httpOptions);
//   }
  
//   isAuthenticated(): boolean {
//     // Check whether the id_token is expired or not
//     window.sessionStorage.setItem(TOKEN_KEY, this.token.getUser());
//     console.log("isAuthenticated");
//     // console.log(this.jwtHelper.isTokenExpired(this.token.getUser().accessToken))
//     return this.jwtHelper.isTokenExpired(this.token.getUser().accessToken);
//   }

//   register(username: string, email: string, password: string): Observable<any> {
//     return this.http.post(AUTH_API + 'signup', {
//       username,
//       email,
//       password
//     }, httpOptions);
//   }
// }
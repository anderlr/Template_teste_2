import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";

import { SignInComponent } from "../../screens/sign-in/sign-in.component";

import { LockComponent } from "../../screens/examples/lock/lock.component";
import { SignUpComponent } from "../../screens/sign-up/sign-up.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SignInComponent,
    LockComponent,
    SignUpComponent
  ]
})
export class AuthLayoutModule {}

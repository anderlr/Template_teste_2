import { Routes } from "@angular/router";

import { SignInComponent } from "../../screens/sign-in/sign-in.component";
import { PricingComponent } from "../../screens/examples/pricing/pricing.component";
import { LockComponent } from "../../screens/examples/lock/lock.component";
import { SignUpComponent } from "../../screens/sign-up/sign-up.component";
import { PresentationComponent } from "../../screens/presentation/presentation.component";
import { UserProfileComponent } from "../../screens/user-profile/user-profile.component";
import {ForgotPasswordComponent} from "../../screens/forgot-password/forgot-password.component"

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "sign-in",
        component: SignInComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "sign-up",
        component: SignUpComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "pricing",
        component: PricingComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "user-profile",
        component: UserProfileComponent,
        //canActivate: [AuthGuardService]//o caminho user-profile usa o AuthGuard pela classe canActivate
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
      },
    ],
  },
];

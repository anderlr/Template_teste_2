import { Routes } from "@angular/router";

import { TimelineComponent } from "./timeline/timeline.component";
import {UserProfileComponent} from "../user-profile/user-profile.component"
import { PricingComponent } from "../../screens/examples/pricing/pricing.component";
import { SignUpComponent } from "../../screens/sign-up/sign-up.component";
import { SignInComponent } from "../../screens/sign-in/sign-in.component";
import { LockComponent } from "./lock/lock.component";

export const ExamplesRoutes: Routes = [
  {
  path: "",
  children: [
    {
      path: "pricing",
      component: PricingComponent
    }
  ]
  },
  {
    path: "",
    children: [
      {
        path: "sign-in",
        component: SignInComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "sign-up",
        component: SignUpComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "timeline",
        component: TimelineComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "user-profile",
        component: UserProfileComponent
      }
    ]
  }
  
];


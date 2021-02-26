import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./screens/presentation/presentation.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./screens/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "components",
        loadChildren: "./screens/components/components.module#ComponentsModule"
      },
      {
        path: "forms",
        loadChildren: "./screens/forms/forms.module#FormsModules"
      },
      {
        path: "tables",
        loadChildren: "./screens/tables/tables.module#TablesModule"
      },
      {
        path: "maps",
        loadChildren: "./screens/maps/maps.module#MapsModule"
      },
      {
        path: "widgets",
        loadChildren: "./screens/widgets/widgets.module#WidgetsModule"
      },
      {
        path: "charts",
        loadChildren: "./screens/charts/charts.module#ChartsModule"
      },
      {
        path: "calendar",
        loadChildren: "./screens/calendar/calendar.module#CalendarModule"
      },
      {
        path: "examples",
        loadChildren: "./screens/examples/examples.module#ExamplesModule"
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'sign-in'
  }
];

//   {
//     path: "",
//     component: AuthLayoutComponent,
//     children: [
//       {
//         path: "examples",
//         loadChildren:
//           "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
//       }
//     ]
//   },
//   {
//     path: "**",
//     redirectTo: "dashboard"
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

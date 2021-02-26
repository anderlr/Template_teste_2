import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { TimelineComponent } from "./timeline/timeline.component";

import { RouterModule } from "@angular/router";
import { ExamplesRoutes } from "./examples.routing";

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ExamplesRoutes),
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class ExamplesModule {}

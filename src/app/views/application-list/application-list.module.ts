import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplicationListComponent } from "./application-list.component";
import { RouterModule } from "@angular/router";
import { ApplicationListRoutes } from "./application-list.routing";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [ApplicationListComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(ApplicationListRoutes)
  ]
})
export class ApplicationListModule {}

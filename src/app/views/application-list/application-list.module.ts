import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ApplicationListComponent } from "./application-list.component";
import { RouterModule } from "@angular/router";
import { ApplicationListRoutes } from "./application-list.routing";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { ApplicationListDetailsComponent } from "./application-list-details/application-list-details.component";
import { MatIconModule, MatCardModule } from "@angular/material";

@NgModule({
  declarations: [ApplicationListComponent, ApplicationListDetailsComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    MatIconModule,
    MatCardModule,
    SharedMaterialModule,
    RouterModule.forChild(ApplicationListRoutes)
  ]
})
export class ApplicationListModule {}

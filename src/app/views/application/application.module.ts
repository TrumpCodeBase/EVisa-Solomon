import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatDialogModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { applicationRoutes } from "./application.routing";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { SharedComponentsModule } from "app/shared/components/shared-components.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ApplicationFormComponent } from "./application-form/application-form.component";
import { ApplicationDetailsComponent } from "./application-details/application-details.component";
import { DataDialogLocationComponent } from "./application-details/data-dialog-location/data-dialog-location.component";

@NgModule({
  declarations: [
    ApplicationFormComponent,
    ApplicationDetailsComponent,
    DataDialogLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    SharedComponentsModule,
    PerfectScrollbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatDialogModule,
    RouterModule.forChild(applicationRoutes)
  ],
  entryComponents: [DataDialogLocationComponent]
})
export class ApplicationModule {}

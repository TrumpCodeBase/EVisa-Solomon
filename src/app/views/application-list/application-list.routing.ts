import { Routes } from "@angular/router";

import { ApplicationListComponent } from "./application-list.component";
import { ApplicationListDetailsComponent } from "./application-list-details/application-list-details.component";

export const ApplicationListRoutes: Routes = [
  { path: "", component: ApplicationListComponent },
  { path: ":id", component: ApplicationListDetailsComponent }
];

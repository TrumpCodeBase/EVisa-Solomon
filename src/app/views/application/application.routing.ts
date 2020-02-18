import { Routes } from "@angular/router";

import { ApplicationFormComponent } from "./application-form/application-form.component";
import { ApplicationDetailsComponent } from "./application-details/application-details.component";

// export const applicationRoutes: Routes = [
//   {
//     path: "",
//     component: ApplicationComponent,
//     children: [
//       {
//         path: "form",
//         component: ApplicationFormComponent,
//         data: { title: "Form" }
//       }
//     ]
//   }
// ];
export const applicationRoutes: Routes = [
  {
    path: "details",
    component: ApplicationDetailsComponent,
    data: { title: "Details", breadcrumb: "Details" }
  },
  {
    path: "form",
    component: ApplicationFormComponent,
    data: { title: "Form", breadcrumb: "Form" }
  }
];

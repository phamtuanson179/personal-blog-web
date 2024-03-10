import { Routes } from "@angular/router";
import { DefaultComponent } from "@pages/default/default.component";
import { defaultRoutes } from "@pages/default/default.routes";

export const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: defaultRoutes,
  },
];

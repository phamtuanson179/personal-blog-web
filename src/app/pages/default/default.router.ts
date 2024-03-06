import { Routes } from "@angular/router";

export const categoryRouters: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("../home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "categories/:id",
    loadComponent: () =>
      import("../home/home.component").then((c) => c.HomeComponent),
  },
];

import { Routes } from "@angular/router";

export const defaultRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("../categories/categories.component").then(
        (c) => c.CategoriesComponent
      ),
  },
  {
    path: "categories/:categoryId",
    loadComponent: () =>
      import("../categories/categories.component").then(
        (c) => c.CategoriesComponent
      ),
  },
];

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
      import("../categories-page/categories-page.component").then(
        (c) => c.CategoriesPageComponent
      ),
  },
  {
    path: "categories/:categoryId",
    loadComponent: () =>
      import("../categories-page/categories-page.component").then(
        (c) => c.CategoriesPageComponent
      ),
  },
  {
    path: "blogs/:blogId",
    loadComponent: () =>
      import("../blog-page/blog-page.component").then(
        (c) => c.BlogPageComponent
      ),
  },
];

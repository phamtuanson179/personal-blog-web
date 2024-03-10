import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryBlogsComponent } from "src/app/features/category/components/category-blogs/category-blogs.component";
import { CategoryIntroComponent } from "src/app/features/category/components/category-intro/category-intro.component";
import { Category } from "src/app/features/category/interfaces/category.interface";
import { CategoryFacadeService } from "src/app/features/category/services/category-facade.service";
import { CategoryStoreService } from "src/app/features/category/services/category-store.service";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CategoryIntroComponent, CategoryBlogsComponent],
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
})
export class CategoriesComponent implements OnInit {
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _categoryFacade = inject(CategoryFacadeService);
  private _categoryStore = inject(CategoryStoreService);

  category: Category | null = null;

  constructor() {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param) => {
      const id = param.get("categoryId");
      console.log(
        id &&
          this._categoryFacade.getCategoryById(
            id,
            this._categoryStore.categories()
          )
      );

      id
        ? this._categoryFacade.getCategoryById(
            id,
            this._categoryStore.categories()
          )
        : (this.category = null);
    });
  }
}

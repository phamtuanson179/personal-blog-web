import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "@features/blog/interfaces/blog.interface";
import { CategoryBlogsComponent } from "@features/category/components/category-blogs/category-blogs.component";
import { CategoryIntroComponent } from "@features/category/components/category-intro/category-intro.component";
import { Category } from "@features/category/interfaces/category.interface";
import { CategoryFacadeService } from "@features/category/services/category-facade.service";
import { CategoryStoreService } from "@features/category/services/category-store.service";
import { CategoriesPageService } from "@pages/categories-page/categories-page.service";

@Component({
  selector: "app-categories-page",
  standalone: true,
  imports: [CategoryIntroComponent, CategoryBlogsComponent],
  templateUrl: "./categories-page.component.html",
  styleUrl: "./categories-page.component.scss",
  providers: [CategoriesPageService],
})
export class CategoriesPageComponent implements OnInit {
  // private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _categoryFacade = inject(CategoryFacadeService);
  private _categoryStore = inject(CategoryStoreService);
  private _categoriesPageService = inject(CategoriesPageService);
  private params = this._activatedRoute.paramMap;
  private queryParams = this._activatedRoute.queryParamMap;

  blogs: Blog[] = [];
  category: Category | null = null;

  constructor() {}
  ngOnInit(): void {
    this._triggerCategoryParamsUpdate();
  }

  private _triggerCategoryParamsUpdate() {
    this.params.subscribe((param) => {
      const id = param.get("categoryId");

      id
        ? (this.category =
            this._categoryFacade.getCategoryById(
              id,
              this._categoryStore.categories()
            ) ?? null)
        : (this.category = null);

      this._categoriesPageService
        .getBlogOfCategory(this.category?.id)
        .subscribe((res) => {
          this.blogs = res;
        });
    });
  }
}

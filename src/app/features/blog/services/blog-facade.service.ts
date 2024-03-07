import { Injectable, inject } from "@angular/core";
import { BlogFilter } from "src/app/features/blog/interfaces/blog-filter.interface";
import { BlogGetsResponse } from "src/app/features/blog/interfaces/blog-gets-response.interface";
import { Blog } from "src/app/features/blog/interfaces/blog.interface";
import { BlogApiService } from "src/app/features/blog/services/blog-api.service";
import { Category } from "src/app/features/category/interfaces/category.interface";
import { CategoryFacadeService } from "src/app/features/category/services/category-facade.service";

@Injectable({ providedIn: "root" })
export class BlogFacadeService {
  private _blogApiService = inject(BlogApiService);
  private _categoryFacadeService = inject(CategoryFacadeService);

  get(params: BlogFilter) {
    return this._blogApiService.get(params);
  }

  mappingCategoriesToBlogGet(
    blog: BlogGetsResponse | Blog,
    categories: Category[]
  ) {
    const findedCategories: Category[] = [];

    for (let i = 0; i < blog.categoryIds.length; i++) {
      const element = this._categoryFacadeService.getCategoryById(
        blog.categoryIds[i],
        categories
      );

      element && findedCategories.push(element);
    }

    blog.categories = findedCategories;
  }
}

import { Injectable, inject } from "@angular/core";
import { BlogFacadeService } from "@features/blog/services/blog-facade.service";

@Injectable()
export class CategoriesPageService {
  private _blogFacade = inject(BlogFacadeService);

  getBlogOfCategory(categoryId?: string) {
    return this._blogFacade.get(
      categoryId ? { categoryIds: [categoryId] } : undefined
    );
  }
}

import { Injectable, inject } from "@angular/core";
import { Category } from "src/app/features/category/interfaces/category.interface";
import { CategoryApiService } from "src/app/features/category/services/category-api.service";

@Injectable({ providedIn: "root" })
export class CategoryFacadeService {
  private _categoryApi = inject(CategoryApiService);

  get(params?: { name: string }) {
    return this._categoryApi.get(params);
  }

  getCategoryById(id: string, categories: Category[]) {
    return categories.find((i) => i.id == id);
  }
}

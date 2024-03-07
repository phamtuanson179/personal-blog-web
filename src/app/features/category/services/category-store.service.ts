import { Injectable, inject, signal } from "@angular/core";
import { Category } from "src/app/features/category/interfaces/category.interface";
import { CategoryFacadeService } from "src/app/features/category/services/category-facade.service";

@Injectable({ providedIn: "root" })
export class CategoryStoreService {
  public categories = signal<Category[]>([]);
  public isRefreshData = signal<boolean>(false);
  public isFetching = signal<boolean>(false);
  private _categoryFacade = inject(CategoryFacadeService);

  constructor() {
    this._fetch();
  }

  private _fetch() {
    this._categoryFacade.get().subscribe((res: Category[]) => {
      this.categories.set(res);
    });
  }
}

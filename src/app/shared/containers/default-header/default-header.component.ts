import { Component, effect, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Category } from "src/app/features/category/interfaces/category.interface";
import { CategoryStoreService } from "src/app/features/category/services/category-store.service";

@Component({
  selector: "app-default-header",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./default-header.component.html",
  styleUrl: "./default-header.component.scss",
})
export class DefaultHeaderComponent {
  private _categoriesStore = inject(CategoryStoreService);
  public categories: Category[] = [];

  constructor() {
    effect(() => {
      this.categories = this._categoriesStore.categories();
    });
  }
}

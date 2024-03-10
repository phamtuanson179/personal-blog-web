import { Component, effect, input } from "@angular/core";
import { Category } from "src/app/features/category/interfaces/category.interface";

const HOME: Category = {
  id: "",
  name: "Home",
  description: "All of thing I try",
};

@Component({
  selector: "app-category-intro",
  standalone: true,
  imports: [],
  templateUrl: "./category-intro.component.html",
  styleUrl: "./category-intro.component.scss",
})
export class CategoryIntroComponent {
  category = input<Category | null>(null);

  protected _category: Category | null = null;

  constructor() {
    effect(() => {
      console.log(this.category());

      this.category()
        ? (this._category = this.category())
        : (this._category = HOME);
    });
  }
}

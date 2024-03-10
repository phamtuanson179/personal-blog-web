import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  input,
} from "@angular/core";
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryIntroComponent {
  category = input<Category | null>(null);

  private _cdr = inject(ChangeDetectorRef);

  protected _category: Category | null = null;

  constructor() {
    effect(() => {
      this.category()
        ? (this._category = this.category())
        : (this._category = HOME);

      this._cdr.markForCheck();
    });
  }
}

import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CategoryStoreService } from "src/app/features/category/services/category-store.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  private _categoryStoreService = inject(CategoryStoreService);
}

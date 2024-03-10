import { Component, effect, inject, input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogGetsResponse } from "src/app/features/blog/interfaces/blog-gets-response.interface";
import { BlogFacadeService } from "src/app/features/blog/services/blog-facade.service";
import { CategoryStoreService } from "src/app/features/category/services/category-store.service";
import { EmptyPipe } from "src/app/shared/pipes/empty.pipe";
import { RelativeTimePipe } from "src/app/shared/pipes/relative-time.pipe";

@Component({
  selector: "app-blog-card",
  standalone: true,
  imports: [RelativeTimePipe, EmptyPipe, RouterModule],
  templateUrl: "./blog-card.component.html",
  styleUrl: "./blog-card.component.scss",
})
export class BlogCardComponent {
  blog = input<BlogGetsResponse | null>(null);

  private _categoryStore = inject(CategoryStoreService);
  private _blogFacade = inject(BlogFacadeService);

  protected _blog: BlogGetsResponse | null = null;

  constructor() {
    effect(() => {
      this._blog = this.blog();

      this._blog &&
        this._blogFacade.mappingCategoriesToBlogGet(
          this._blog,
          this._categoryStore.categories()
        );
    });
  }
}

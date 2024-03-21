import { Component, effect, inject, input } from "@angular/core";
import { BlogAuthorComponent } from "@features/blog/components/blog-author/blog-author.component";
import { BlogDetailContentComponent } from "@features/blog/components/blog-detail-content/blog-detail-content.component";
import { BlogDetailHeaderComponent } from "@features/blog/components/blog-detail-header/blog-detail-header.component";
import { BlogDetailSuggestionComponent } from "@features/blog/components/blog-detail-suggestion/blog-detail-suggestion.component";
import { Blog } from "@features/blog/interfaces/blog.interface";
import { BlogFacadeService } from "@features/blog/services/blog-facade.service";

@Component({
  selector: "app-blog-page",
  standalone: true,
  imports: [
    BlogDetailHeaderComponent,
    BlogDetailContentComponent,
    BlogDetailSuggestionComponent,
    BlogAuthorComponent,
  ],
  templateUrl: "./blog-page.component.html",
  styleUrl: "./blog-page.component.scss",
})
export class BlogPageComponent {
  private _blogFacade = inject(BlogFacadeService);
  blogId = input<string>();

  blog?: Blog;

  constructor() {
    effect(() => {
      this._blogFacade.getById({ id: this.blogId() ?? "" }).subscribe((res) => {
        this.blog = res;
      });
    });
  }
}

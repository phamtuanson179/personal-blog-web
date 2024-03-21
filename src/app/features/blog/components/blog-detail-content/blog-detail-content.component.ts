import { Component, input } from "@angular/core";
import { Blog } from "@features/blog/interfaces/blog.interface";

@Component({
  selector: "app-blog-detail-content",
  standalone: true,
  imports: [],
  templateUrl: "./blog-detail-content.component.html",
  styleUrl: "./blog-detail-content.component.scss",
})
export class BlogDetailContentComponent {
  blog = input<Blog>();
}

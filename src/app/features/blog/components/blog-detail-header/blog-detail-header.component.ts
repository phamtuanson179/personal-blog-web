import { Component, input } from "@angular/core";
import { Blog } from "@features/blog/interfaces/blog.interface";

@Component({
  selector: "app-blog-detail-header",
  standalone: true,
  imports: [],
  templateUrl: "./blog-detail-header.component.html",
  styleUrl: "./blog-detail-header.component.scss",
})
export class BlogDetailHeaderComponent {
  blog = input<Blog>();
}

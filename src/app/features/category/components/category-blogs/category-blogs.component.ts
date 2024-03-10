import { Component, input } from "@angular/core";
import { Blog } from "@features/blog/interfaces/blog.interface";
import { BlogCardsComponent } from "src/app/features/blog/components/blog-cards/blog-cards.component";

@Component({
  selector: "app-category-blogs",
  standalone: true,
  imports: [BlogCardsComponent],
  templateUrl: "./category-blogs.component.html",
  styleUrl: "./category-blogs.component.scss",
})
export class CategoryBlogsComponent {
  blogs = input<Blog[]>([]);
}

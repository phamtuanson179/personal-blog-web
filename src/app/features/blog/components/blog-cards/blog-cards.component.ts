import { Component, input } from "@angular/core";
import { BlogCardComponent } from "src/app/features/blog/components/blog-card/blog-card.component";
import { Blog } from "src/app/features/blog/interfaces/blog.interface";

@Component({
  selector: "app-blog-cards",
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: "./blog-cards.component.html",
  styleUrl: "./blog-cards.component.scss",
})
export class BlogCardsComponent {
  blogs = input<Blog[]>([]);
}

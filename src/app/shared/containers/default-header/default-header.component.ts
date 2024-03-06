import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-default-header",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./default-header.component.html",
  styleUrl: "./default-header.component.scss",
})
export class DefaultHeaderComponent {
  public MENUS = MENUS;
}

export const MENUS: { view: string; url: string }[] = [
  { url: "/", view: "Home" },
  { url: "/front-end", view: "Front End" },
  { url: "/book", view: "Book" },
];

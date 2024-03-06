import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DefaultFooterComponent } from "src/app/shared/containers/default-footer/default-footer.component";
import { DefaultHeaderComponent } from "src/app/shared/containers/default-header/default-header.component";

@Component({
  selector: "app-default",
  standalone: true,
  imports: [DefaultHeaderComponent, DefaultFooterComponent, RouterOutlet],
  providers: [],
  templateUrl: "./default.component.html",
  styleUrl: "./default.component.scss",
})
export class DefaultComponent {}

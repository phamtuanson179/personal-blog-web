import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [],
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
})
export class CategoriesComponent implements OnInit {
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  constructor() {}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param) => {
      console.log(param.get("categoryId"));
    });
  }
}

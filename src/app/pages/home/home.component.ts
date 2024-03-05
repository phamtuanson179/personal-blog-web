import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputComponent } from "src/app/shared/ui/input/input.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("input") input!: InputComponent;
  test = "";

  ngAfterViewInit(): void {
    this.input.control.addValidators(Validators.required);
  }
}

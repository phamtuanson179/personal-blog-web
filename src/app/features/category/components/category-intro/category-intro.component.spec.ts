import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CategoryIntroComponent } from "./category-intro.component";

describe("CategoryIntroComponent", () => {
  let component: CategoryIntroComponent;
  let fixture: ComponentFixture<CategoryIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

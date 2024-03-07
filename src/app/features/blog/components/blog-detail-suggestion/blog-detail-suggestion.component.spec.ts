import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogDetailSuggestionComponent } from "./blog-detail-suggestion.component";

describe("BlogDetailSuggestionComponent", () => {
  let component: BlogDetailSuggestionComponent;
  let fixture: ComponentFixture<BlogDetailSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailSuggestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

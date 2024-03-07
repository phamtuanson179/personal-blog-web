import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BlogDetailHeaderComponent } from "./blog-detail-header.component";

describe("BlogDetailHeaderComponent", () => {
  let component: BlogDetailHeaderComponent;
  let fixture: ComponentFixture<BlogDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

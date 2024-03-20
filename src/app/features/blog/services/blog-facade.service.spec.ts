import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { FAKE_BLOGS } from "@assets/fake-data/blogs";
import { FAKE_CATEGORIES } from "@assets/fake-data/categories";
import { BlogGetsResponse } from "@features/blog/interfaces/blog-gets-response.interface";
import { BlogApiService } from "@features/blog/services/blog-api.service";
import { BlogFacadeService } from "@features/blog/services/blog-facade.service";

describe("BlogFacadeService", () => {
  let service: BlogFacadeService,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blogApiServiceSpy: any;

  beforeEach(() => {
    blogApiServiceSpy = jasmine.createSpyObj("BlogApiService", ["get"]);

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: BlogApiService, useValue: blogApiServiceSpy },
      ],
    });

    service = TestBed.inject(BlogFacadeService);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  it("should call once blogApiServiceSpy when call get method", () => {
    service.get();

    expect(blogApiServiceSpy.get).toHaveBeenCalledTimes(1);
  });

  it("should map category to blog", () => {
    const blog: BlogGetsResponse = { ...FAKE_BLOGS[0] };
    service.mappingCategoriesToBlogGet(blog, FAKE_CATEGORIES);

    expect(blog?.categories?.[0].name).toBe(FAKE_CATEGORIES[0].name);
  });
});

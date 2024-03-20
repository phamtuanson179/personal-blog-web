import { provideHttpClient } from "@angular/common/http";
import {
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";
import { TestBed, waitForAsync } from "@angular/core/testing";
import { FAKE_BLOGS } from "@assets/fake-data/blogs";
import { BlogApiService } from "@features/blog/services/blog-api.service";

describe("BlogApiService", () => {
  let service: BlogApiService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(BlogApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("should create", () => {
    expect(service).toBeTruthy();
  });

  fit("should get all courses", waitForAsync(() => {
    service.get().subscribe((res) => {
      expect(res.length).toEqual(FAKE_BLOGS.length);
    });

    const req = httpTestingController.expectOne("blogs");
    expect(req.request.method).toEqual("GET");
    req.flush(FAKE_BLOGS);
  }));
});

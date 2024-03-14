import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideLocationMocks } from "@angular/common/testing";
import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";

import { provideHttpClient } from "@angular/common/http";
import { DebugElement, WritableSignal, signal } from "@angular/core";
import { By } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { FAKE_CATEGORIES } from "@assets/fake-data/categories";
import { Category } from "@features/category/interfaces/category.interface";
import { CategoryApiService } from "@features/category/services/category-api.service";
import { CategoryFacadeService } from "@features/category/services/category-facade.service";
import { CategoryStoreService } from "@features/category/services/category-store.service";
import { routes } from "src/app/app.routes";
import { DefaultHeaderComponent } from "./default-header.component";

class MockCategoryStoreService extends CategoryStoreService {
  public override categories: WritableSignal<Category[]> = signal<Category[]>(
    []
  );
  public override isRefreshData: WritableSignal<boolean> =
    signal<boolean>(false);
  public override isFetching: WritableSignal<boolean> = signal<boolean>(false);
}

describe("DefaultHeaderComponent", () => {
  let component: DefaultHeaderComponent;
  let fixture: ComponentFixture<DefaultHeaderComponent>;
  let el: DebugElement;
  let categoryStore: CategoryStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter(routes),
        provideLocationMocks(),
        {
          provide: CategoryStoreService,
          useClass: MockCategoryStoreService,
        },
        CategoryFacadeService,
        CategoryApiService,
      ],
      imports: [DefaultHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultHeaderComponent);
    component = fixture.componentInstance;
    categoryStore = TestBed.inject(CategoryStoreService);

    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should update category when service update category", () => {
    categoryStore.categories.set(FAKE_CATEGORIES);
    fixture.detectChanges();

    expect(component.categories).toEqual(categoryStore.categories());
  });

  it("should render 5 menus with fake categories", fakeAsync(() => {
    categoryStore.categories.set(FAKE_CATEGORIES);
    //for run effect
    fixture.detectChanges();

    //for update ui after update category
    fixture.detectChanges();
    const menuEls = el.queryAll(By.css("li"));

    expect(menuEls.length).toEqual(5);
  }));
});

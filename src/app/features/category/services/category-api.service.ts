import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { CategoryCreate } from "src/app/features/category/interfaces/category-create.interface";
import { CategoryUpdate } from "src/app/features/category/interfaces/category-update.interface";
import { Category } from "src/app/features/category/interfaces/category.interface";

const URL = "categories";

@Injectable({ providedIn: "root" })
export class CategoryApiService {
  private _http = inject(HttpClient);

  get(params?: { name: string }) {
    return this._http.get<Category[]>(URL, { params });
  }

  getById(params?: { id: string }) {
    return this._http.get(`${URL}/${params?.id}`);
  }

  update(params: { id: string }, body: CategoryUpdate) {
    return this._http.patch(`${URL}/${params?.id}`, body);
  }

  create(body: CategoryCreate) {
    return this._http.post(`${URL}`, body);
  }
}

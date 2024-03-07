import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BlogFilter } from "src/app/features/blog/interfaces/blog-filter.interface";

const URL = "blogs";

@Injectable({ providedIn: "root" })
export class BlogApiService {
  private _http = inject(HttpClient);

  get(params: BlogFilter) {
    const _params = new HttpParams(params);
    return this._http.get(URL, { params: _params });
  }

  getById(params?: { id: string }) {
    return this._http.get(`${URL}/${params?.id}`);
  }

  // update(params: { id: string }, body: CategoryUpdate) {
  //   return this._http.patch(`${URL}/${params?.id}`, body);
  // }

  // create(body: CategoryCreate) {
  //   return this._http.post(`${URL}`, body);
  // }
}

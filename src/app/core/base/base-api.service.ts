import { Observable } from "rxjs";

export interface BaseApiService {
  get: (params: { [key: string]: string | number }) => Observable<unknown>;
  getById(params: unknown): (params: unknown) => Observable<unknown>;
  update(params: unknown, body: unknown): () => Observable<unknown>;
  create(body: unknown): () => Observable<unknown>;
}

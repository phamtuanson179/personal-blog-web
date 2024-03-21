import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { PathInterceptor } from "src/app/core/interceptors/path.interceptors";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: PathInterceptor, multi: true },
  ],
};

// import { AuthService } from '../auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.services";
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = localStorage.getItem("token");
    console.log("INTERCEPTOR");
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    // authReq.set

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          if (error.status !== 401) {
            // 401 handled in auth.interceptor
            // this.toastr.error(error.message);   
            console.log("aaaaaaaa");   
          }
          return throwError(error);
        })
      );
  }
}

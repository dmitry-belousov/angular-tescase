// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
// } from '@angular/common/http';

// import { Observable } from 'rxjs';

// /** Pass untouched request through to the next request handler. */
// @Injectable()
// export class NoopInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler):
//     Observable<HttpEvent<any>> {
//     return next.handle(req);
//   }
// }

 
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
/**
 * JWT Interceptor перехватывает http-запросы от приложения,
 * чтобы добавить токен JWT-аутентификации в заголовок авторизации,
 * если пользователь вошел в систему.
 *
 * - - - -
 * @Include
 * Перехватчики Http добавляются в конвейер запросов в разделе провайдеров файла app.module.ts.
 */
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        } 

        return next.handle(request);
    }
}
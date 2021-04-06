// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const token = '6bfc9e69194466591dbb2a7ae31e73a8bc9e4e42';
//         const newRequest = request.clone({setHeaders: {'Authorization': `Bearer ${token}`}})
//         return next.handle(newRequest);
//     }

// }
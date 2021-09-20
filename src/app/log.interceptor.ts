import { Injectable } from  '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'


@Injectable()
export class LogInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = new Date().getTime();
    console.log(req.urlWithParams);
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          console.log(new Date().getTime() - start);
        }
      })
    );
  }
}


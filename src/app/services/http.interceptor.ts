import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { tap } from 'rxjs/operators';
export class MyHttpInterceptor implements HttpInterceptor {

  intercept( req: HttpRequest<any>, next: HttpHandler) {
    console.log('I AM HERERER');
    const newRequest = req.clone({
      headers: req.headers.set('Authorization', localStorage.getItem('token'))
    });

    console.log(newRequest);
    return next.handle(newRequest)
        .pipe(
          tap(
            res => {
              console.log(res);
            },
            err => {
              if ( err.status === 401 ) {
                console.error('YOU ARE NOT AUTHENTICATED');
              }
            }));
      }
}

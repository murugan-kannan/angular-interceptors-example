import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

export class HeaderInterceptors implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const clone = req.clone({
      setHeaders: {
        'x-header-key': 'x-header-value'
      }
    });

    return next.handle(clone);
  }
}

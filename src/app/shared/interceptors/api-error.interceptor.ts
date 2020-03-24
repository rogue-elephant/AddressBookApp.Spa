import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  constructor(private notificationsService: NotificationsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        this.notificationsService.showNotification(`${error.status}`, error.message, 'error');
        return throwError(error);
      })
    );
  }
}

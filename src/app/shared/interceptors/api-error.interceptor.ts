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
import { IApiResponse } from '../models/IApiResponse';

/** Intercepts any errors returned from the API and displays them via the notification service.
 * @export
 * @class ApiErrorInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  constructor(private notificationsService: NotificationsService) {}

  intercept(
    request: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    return handler.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if(error.error) {
          const errorResponse : IApiResponse = error.error;
          if(errorResponse.errors && errorResponse.errors.length > 0) {
            errorResponse.errors.forEach(error => {
              this.notificationsService.showNotification(`${error.errorCode}`, error.message, 'error');
            });
          }
        }
        return throwError(error);
      })
    );
  }
}

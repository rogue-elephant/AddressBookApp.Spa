import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

/** Intercepts APi calls and displays a loading icon on the page via the Loading Service until the call has finished.
 * @export
 * @class LoadingInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) { }
  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
      this.loadingService.show();
      return handler.handle(request).pipe(
          finalize(() => this.loadingService.hide())
      );
  }

}

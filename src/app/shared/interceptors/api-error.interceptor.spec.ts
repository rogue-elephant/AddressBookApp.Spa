import { TestBed } from "@angular/core/testing";

import { ApiErrorInterceptor } from "./api-error.interceptor";
import { NotificationsService } from "../services/notifications.service";
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe("ApiErrorInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiErrorInterceptor, NotificationsService],
      imports: [MatSnackBarModule]
    })
  );

  it("should be created", () => {
    const interceptor: ApiErrorInterceptor = TestBed.inject(
      ApiErrorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});

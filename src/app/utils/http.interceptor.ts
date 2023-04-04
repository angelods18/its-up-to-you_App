import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from "../service/auth.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        
        return from(this.authService.getAuthToken())
            .pipe(
                switchMap(token => {
                    console.log(token, "token");
                    if (token) {
                        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                    }

                    if (!request.headers.has('Content-Type')) {
                        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                    }

                    return next.handle(request).pipe(
                        map((event: HttpEvent<any>) => {
                            if (event instanceof HttpResponse) {
                                // do nothing for now
                            }
                            return event;
                        }),
                        catchError((error: HttpErrorResponse) => {
                            const status =  error.status;
                            const reason = error && error.error.reason ? error.error.reason : '';

                            // this.presentAlert(status, reason);
                            return throwError(error);
                        })
                    );
                })
            )
        // const tokenAuth = this.authService.getAuthToken().then(
        //     tt => {
        //         console.log(tt, "getAuthToken");
        //     }
        // );
        // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJEZXNhMTgiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNFbmFibGVkIjp0cnVlLCJleHAiOjE2ODA2NDY4MjQsImlhdCI6MTY4MDY0MzIyNDMyNn0.dqmz0znGOvLS1rvxhF5ug-3m_kkfj-59EIs6h01OTdI";
        // // console.log(token);
        // //Authentication by setting header with token value
        // if (token) {
        //     request = request.clone({
        //     setHeaders: {
        //         'Authorization': token
        //     }
        //     });
        // }
    
        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({
        //     setHeaders: {
        //         'content-type': 'application/json'
        //     }
        //     });
        // }
    
        // request = request.clone({
        //     headers: request.headers.set('Accept', 'application/json')
        // });
    
        // return next.handle(request).pipe(
        //     map((event: HttpEvent<any>) => {
        //     if (event instanceof HttpResponse) {
        //         console.log('event--->>>', event);
        //     }
        //     return event;
        //     }),
        //     catchError((error: HttpErrorResponse) => {
        //     console.error(error);
        //     return throwError(error);
        //     }));
    }
}
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        
        return from(this.authService.getAuthToken())
            .pipe(
                switchMap(token => {
                    console.log(token, "token");
                    if (token && 
                        !request.url.includes('public')) {
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
                            console.log(error, "errore");
                            if(status==401 && !request.url.includes('refresh') && token){
                                this.authService.refresh().subscribe(
                                    (refreshResp: any) => {
                                        this.authService.setBearerToken(refreshResp.token);
                                    },
                                    err => {
                                        this.authService.deleteBearerToken().then(() => {
                                            console.log("refresh fallito, tornare a login");
                                            this.router.navigate(['/home'])
                                        })
                                    }
                                )
                            }
                            const reason = error && error.error.reason ? error.error.reason : '';

                            // this.presentAlert(status, reason);
                            return throwError(() => new Error(error.message));
                        })
                    );
                })
            )
    }
}
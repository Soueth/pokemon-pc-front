import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	private tokenValue: string | null = null;

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.tokenValue) {
			req = req.clone({
				setHeaders: {
					Authorization: this.tokenValue,
				}
			})
		}

		return next.handle(req).pipe(
			tap((event) => {
				if (event instanceof HttpResponse) {
					const authorizationHeader = event.headers.get('Authorization');

					if (authorizationHeader) {
						this.tokenValue = authorizationHeader;
					}
				}
			})
		)
	}
}


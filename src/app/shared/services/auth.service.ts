import { HttpClient, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, shareReplay } from "rxjs";
import { ILogin } from "src/app/landing-page/landing-page.types";
import { enviroment } from "src/enviroments/enviroment-dev";
import { ResponseProps } from "src/shared/types/responses";


@Injectable({ providedIn: 'root' })
export class AuthService {
    SERVER_URL = enviroment.apiUrl;
    
    public readonly isLogged$ = new BehaviorSubject<boolean>(true); // false
    private readonly authenticatedHeader$ = new BehaviorSubject<string | null>(null);

    constructor(public http: HttpClient) {
        this.SERVER_URL = `${this.SERVER_URL}/auth`;

        const token = localStorage.getItem('token');

        // TODO: Retirar quando o Refresh Token estiver implementado
        if (token) { 
            this.authenticatedHeader$.next(token);
        }
    }

    // private getCSRF() {
    //     return lastValueFrom(
    //         this.http.get(`${enviroment.apiUrl}/sanctum/csrf-cookie`)
    //     );
    // }

    // Loga o usuáio
    login(content: ILogin): Observable<HttpResponse<ResponseProps<void>>> {
        // await this.getCSRF();
        const response = this.http.post<ResponseProps<void>>(`${this.SERVER_URL}/login`, content, { observe: 'response' })
            .pipe(shareReplay(1));

        this.setAuthToken(response);

        return response;
    }

    // Cadastra o usuário
    signUp(content: ILogin): Observable<any> {
        // await this.getCSRF();
        const response = this.http.post(`${this.SERVER_URL}/signup`, content, { observe: 'response' })
            .pipe(shareReplay(1));

        this.setAuthToken(response);

        return response;
    }

    public setAuthToken(response: Observable<HttpResponse<any>>) {
        response.subscribe((res) => {
            this.isLogged$.next(res.status === HttpStatusCode.NoContent)

            const authorizationHeader = res.headers.get('Authorization');

            if (authorizationHeader) {
                this.authenticatedHeader$.next(authorizationHeader);
                localStorage.setItem('token', authorizationHeader); // Retirar quando o Refresh Token estiver implementado
            }
        });
    }

    public getAuthorizationHeader() {
        return this.authenticatedHeader$.getValue() ?? undefined;
    }

    // Verifica se o usuário está logado
    // verifyLogin() {
    //     this.http.get(`${this.SERVER_URL}/verify-login`).subscribe({
    //         next: (res) => this.isLogged$.next(res.data),
    //         error: (err) => console.error(err),
    //     });
    // }
}

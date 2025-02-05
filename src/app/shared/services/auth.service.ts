import { HttpClient, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { ILogin } from "src/app/landing-page/landing-page.types";
import { enviroment } from "src/enviroments/enviroment-dev";
import { localStorageAvalible } from "src/shared/functions";
import { ResponseProps } from "src/shared/types/responses";


@Injectable({ providedIn: 'root' })
export class AuthService {
    SERVER_URL = enviroment.apiUrl;
    
    public readonly isLogged$ = new BehaviorSubject<boolean>(true); // false
    private readonly authenticatedHeader$ = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient) { // public
        this.SERVER_URL = `${this.SERVER_URL}/auth`;

        if (localStorageAvalible()) {
            const token = localStorage.getItem('token');

            // TODO: Retirar quando o Refresh Token estiver implementado
            if (token) { 
                this.authenticatedHeader$.next(token);
            }
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
            .pipe(
                tap((res: HttpResponse<any>) => this.setAuthToken(res))
            )

        return response;
    }

    // Cadastra o usuário
    signUp(content: ILogin): Observable<any> {
        // await this.getCSRF();
        const response = this.http.post(`${this.SERVER_URL}/signup`, content, { observe: 'response' })
            .pipe(
                tap((res: HttpResponse<any>) => this.setAuthToken(res))
            )

        // this.setAuthToken(response);

        return response;
    }

    private setAuthToken(response: HttpResponse<any>) { // public
        this.isLogged$.next(response.status === HttpStatusCode.NoContent)

        // @ts-ignore
        const authorizationHeader = res.headers['Authorization'];

        if (authorizationHeader) {
            this.authenticatedHeader$.next(authorizationHeader);
            if (localStorageAvalible()) {
                window?.localStorage?.setItem('token', authorizationHeader); // Retirar quando o Refresh Token estiver implementado
            }
        }
    }

    public getAuthorizationHeader() {
        return this.authenticatedHeader$.getValue() ?? undefined;
    }

    public reset() {
        if (localStorageAvalible()) {
            window?.localStorage?.clear();
        }
        
        this.isLogged$.next(true);
        this.authenticatedHeader$.next(null);
    }

    // Verifica se o usuário está logado
    // verifyLogin() {
    //     this.http.get(`${this.SERVER_URL}/verify-login`).subscribe({
    //         next: (res) => this.isLogged$.next(res.data),
    //         error: (err) => console.error(err),
    //     });
    // }
}

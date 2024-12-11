import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "../../app/landing-page/landing-page.types";
import { enviroment } from "../../enviroments/enviroments";
import { lastValueFrom } from "rxjs";


@Injectable({ providedIn: 'root' })
export class AuthService {
    SERVER_URL = enviroment.apiUrl;

    constructor(private http: HttpClient) {
        this.SERVER_URL = `${this.SERVER_URL}/auth`
    }

    login(content: ILogin) {
        // TODO: Implementar a rota no backend
        return lastValueFrom(
            this.http.post(`${this.SERVER_URL}/login`, content)
        );
    }

    signup(content: ILogin) {
        // TODO: Implementar a rota no backend
        return (this.http.post(`${this.SERVER_URL}/signup`, content));
    }
}
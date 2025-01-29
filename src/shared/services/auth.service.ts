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

    private getCSRF() {
        return lastValueFrom(
            this.http.get(`${enviroment.apiUrl}/sanctum/csrf-cookie`)
        );
    }

    async login(content: ILogin) {
        await this.getCSRF();

        return lastValueFrom(
            this.http.post(`${this.SERVER_URL}/login`, content)
        );
    }

    async signup(content: ILogin) {
        await this.getCSRF();

        return lastValueFrom(
            this.http.post(`${this.SERVER_URL}/signup`, content)
        );
    }
}

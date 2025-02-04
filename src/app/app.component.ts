import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { GlobalConstants } from "./common/constants";
import { ActiveTeamComponent } from "./shared/components/active-team/active-team.component";
import { TopMenuComponent } from "./shared/components/top-menu/top-menu.component";
import { AuthService } from "./shared/services/auth.service";
import { LanguageService } from "./shared/services/language.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, TopMenuComponent, ActiveTeamComponent],
	providers: [
		GlobalConstants,
		// { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "Boxes";

	isLogged = signal<boolean>(true); // false

	constructor(
		private langService: LanguageService,
		private authService: AuthService,
	) {
		this.langService.setLanguage("pt-br");

		this.authService.isLogged$.subscribe((logged) => this.isLogged.set(logged));
	}
}

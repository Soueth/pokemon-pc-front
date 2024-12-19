import { Component, Input, output, OutputEmitterRef } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { featherLogIn } from "@ng-icons/feather-icons";
import { gameIdCard } from "@ng-icons/game-icons";
import { TranslatePipe } from "../../../shared/pipes/translate.pipe";

@Component({
	selector: "app-top-login",
	standalone: true,
	imports: [
		// Menubar,
		// MatIconModule,
		NgIcon,
		TranslatePipe,
	],
	templateUrl: "./top-login.component.html",
	styleUrl: "./top-login.component.scss",
	viewProviders: [
		provideIcons({
			gameIdCard,
			featherLogIn,
		}),
	],
})
export class TopLoginComponent {
	@Input() opened: boolean = false;

	openedChange: OutputEmitterRef<boolean> = output<boolean>();
	index: OutputEmitterRef<number> = output<number>();

	openBar(index: number): void {
		this.index.emit(index);
    	this.openedChange.emit(true);
  };
}

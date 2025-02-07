import { NgTemplateOutlet } from "@angular/common";
import {
	Component,
	ElementRef,
	signal,
	ViewChild,
	WritableSignal
} from "@angular/core";
import { slideInLeft, slideInRight } from "src/app/common/animations";
import { TranslatePipe } from "src/shared/pipes/translate.pipe";

@Component({
	selector: "app-landing-content",
	standalone: true,
	imports: [
		// CommonModule,
		TranslatePipe,
		// MatSidenavModule,
		NgTemplateOutlet,
	],
	templateUrl: "./landing-content.component.html",
	styleUrl: "./landing-content.component.scss",
	animations: [slideInRight, slideInLeft],
})
export class LandingContentComponent {
	whatIsVisible = signal(false);
	aboutPokeVisible = signal(false);
	aboutItemsVisible = signal(false);
	abountTeamsVisible = signal(false);

	@ViewChild("cardWhatIs", { static: true }) cardWhatIs!: ElementRef<HTMLDivElement>;
	@ViewChild("cardPokemon", { static: true }) cardPokemon!: ElementRef<HTMLDivElement>;
	@ViewChild("cardItems", { static: true }) cardItems!: ElementRef<HTMLDivElement>;
	@ViewChild("cardTeams", { static: true }) cardTeams!: ElementRef<HTMLDivElement>;

	constructor(
		// @Inject(AUTHOR_GITHUB) public authorGithub: string,
	) {}

	onScroll(windowHeight: number): void {
		this.verifyCardVisibility(this.whatIsVisible, this.cardWhatIs, windowHeight);
		this.verifyCardVisibility(this.aboutPokeVisible, this.cardPokemon, windowHeight);
		this.verifyCardVisibility(this.aboutItemsVisible, this.cardItems, windowHeight);
		this.verifyCardVisibility(this.abountTeamsVisible, this.cardTeams, windowHeight);
	}

	private verifyCardVisibility(
		visibilty: WritableSignal<boolean>,
		card: ElementRef<HTMLDivElement>,
		windowHeight: number,
	) {
		if (visibilty() || !card) return;

		const element = card.nativeElement;

		if (element) {
			const rect = element.getBoundingClientRect();
			const inView = rect.top <= windowHeight && rect.bottom >= 0;

			if (inView) visibilty.set(true);
		}
	}
}

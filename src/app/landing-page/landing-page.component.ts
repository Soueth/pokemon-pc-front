import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { TranslatePipe } from "src/shared/pipes/translate.pipe";
import { AUTHOR_GITHUB } from "../common/constants";
import { LandingContentComponent } from "./landing-content/landing-content.component";
import { SignSideComponent } from "./sign-side/sign-side.component";
import { TopLoginComponent } from "./top-login/top-login.component";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [
		MatSidenavModule,
		TopLoginComponent,
		SignSideComponent,
		LandingContentComponent,
		TranslatePipe,
	],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.scss",
	animations: [],
})
export class LandingPageComponent implements OnInit {
	opened: boolean = false;
	index: number = 0;

	@ViewChild("drawnerContainer", { static: true, read: ElementRef }) drawnerContainer!: ElementRef;
	@ViewChild("landingContent") landingContent!: LandingContentComponent;

	constructor(
		@Inject(AUTHOR_GITHUB) public authorGithub: string,
		private renderer: Renderer2,
	) {}

	ngOnInit(): void {
		const content = this.drawnerContainer.nativeElement.querySelector(".mat-drawer-content");

		if (!content) return;

		this.renderer.listen(content, "scroll", () => {
			this.landingContent.onScroll(content.clientHeight);
		});
	}
	// whatIsVisible = signal(false);
	// aboutPokeVisible = signal(false);
	// aboutItemsVisible = signal(false);
	// abountTeamsVisible = signal(false);

	// private scrollEventListener?: () => void;

	// @ViewChild("cardWhatIs", { static: true }) cardWhatIs!: ElementRef<HTMLDivElement>;

	// constructor(
	// 	private renderer2: Renderer2,
	// 	@Inject(PLATFORM_ID) private platformId: any,
	// 	@Inject(AUTHOR_GITHUB) public authorGithub: string,
	// ) {}

	// ngOnInit(): void {
	// 	if (isPlatformBrowser(this.platformId)) {
	// 		this.scrollEventListener = this.renderer2.listen('window', 'scroll', () => {
	// 			console.log('scroll');
	// 		});
	// 	}
	// }

	// ngOnDestroy(): void {
	// 	if (this.scrollEventListener) {
	// 		this.scrollEventListener();
	// 	}
	// }

	// private onScroll = (): void => {
	// 	const windowHeight = document.documentElement.clientHeight || 0;

	// 	this.verifyCardVisibility(this.whatIsVisible, this.cardWhatIs, windowHeight);
	// };

	// private verifyCardVisibility(
	// 	visibilty: WritableSignal<boolean>,
	// 	card: ElementRef<HTMLDivElement>,
	// 	windowHeight: number,
	// ) {
	// 	if (!visibilty() || !card) return;

	// 	const element = card.nativeElement;

	// 	if (element) {
	// 		const rect = element.getBoundingClientRect();
	// 		const inView = rect.top <= windowHeight && rect.bottom >= 0;

	// 		if (inView) visibilty.set(true);
	// 	}
	// }
}

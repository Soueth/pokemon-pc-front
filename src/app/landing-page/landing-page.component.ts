import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Inject,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	Renderer2,
	Signal,
	signal,
	ViewChild,
	WritableSignal,
} from "@angular/core";
import { TranslatePipe } from "../../shared/pipes/translate.pipe";
import { LanguageService } from "../../shared/services/language.service";
import { AUTHOR_GITHUB } from "../common/constants";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SignSideComponent } from "./sign-side/sign-side.component";
import { TopLoginComponent } from "./top-login/top-login.component";
import { FloatLabel } from "primeng/floatlabel";
import { CommonModule, isPlatformBrowser, NgTemplateOutlet } from "@angular/common";
import { slideInRightAnimation } from "../common/animations";
import { fromEvent } from "rxjs";
import { LandingContentComponent } from "./landing-content/landing-content.component";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [MatSidenavModule, TopLoginComponent, SignSideComponent, LandingContentComponent],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.scss",
	animations: [slideInRightAnimation],
})
export class LandingPageComponent implements OnInit {
	opened: boolean = false;
	index: number = 0;

	@ViewChild("drawnerContainer", { static: true, read: ElementRef }) drawnerContainer!: ElementRef;
	@ViewChild("landingContent") landingContent!: LandingContentComponent;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		const container = this.drawnerContainer.nativeElement.querySelector('.mat-drawer-content');
		if (!container) return;

		this.renderer.listen(container, "scroll", () => {
			console.log("Scroll detectado no mat-drawer-container");
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

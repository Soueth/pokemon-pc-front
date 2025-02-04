import { NgOptimizedImage } from "@angular/common";
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslatePipe } from "src/shared/pipes/translate.pipe";
import { AUTHOR_GITHUB } from "../common/constants";
import { LandingContentComponent } from "./landing-content/landing-content.component";
import { SignSideComponent } from "./sign-side/sign-side.component";
import { TopLoginComponent } from "./top-login/top-login.component";

@UntilDestroy({ checkProperties: true })
@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [
		MatSidenavModule,
		TopLoginComponent,
		SignSideComponent,
		LandingContentComponent,
		TranslatePipe,
    NgOptimizedImage,
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
}

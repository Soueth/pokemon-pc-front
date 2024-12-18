import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, NgZone, PLATFORM_ID, Renderer2, signal, ViewChild, WritableSignal } from '@angular/core';
import { slideInRightAnimation } from 'src/app/common/animations';
import { AUTHOR_GITHUB } from 'src/app/common/constants';
import { TranslatePipe } from 'src/shared/pipes/translate.pipe';
import { SignSideComponent } from '../sign-side/sign-side.component';

@Component({
  selector: 'app-landing-content',
  standalone: true,
  imports: [
    // CommonModule,
    TranslatePipe,
    // MatSidenavModule,
    NgTemplateOutlet,
  ],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.scss',
  animations: [slideInRightAnimation],
})
export class LandingContentComponent {
  whatIsVisible = signal(false);
  aboutPokeVisible = signal(false);
  aboutItemsVisible = signal(false);
  abountTeamsVisible = signal(false);

  private scrollEventListener?: () => void;

  @ViewChild("cardWhatIs", { static: true }) cardWhatIs!: ElementRef<HTMLDivElement>;

  constructor(
    private renderer2: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(AUTHOR_GITHUB) public authorGithub: string,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.scrollEventListener = this.renderer2.listen('window', 'scroll', () => {
    //     console.log('scroll detectado dentro do Angular');
    //   });
    // }
  }

  ngOnDestroy(): void {
    if (this.scrollEventListener) {
      this.scrollEventListener();
    }
  }

  onScroll(target: any): void {
    const windowHeight = document.documentElement.clientHeight || 0;

    this.verifyCardVisibility(this.whatIsVisible, this.cardWhatIs, windowHeight);
  };

  private verifyCardVisibility(
    visibilty: WritableSignal<boolean>,
    card: ElementRef<HTMLDivElement>,
    windowHeight: number,
  ) {
    if (!visibilty() || !card) return;

    const element = card.nativeElement;

    if (element) {
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= windowHeight && rect.bottom >= 0;

      if (inView) visibilty.set(true);
    }
  }
}

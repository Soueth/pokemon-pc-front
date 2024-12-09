import { Component, Inject, ViewChild } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageService } from '../../shared/services/language.service';
import { AUTHOR_GITHUB } from '../common/constants';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SignSideComponent } from './sign-side/sign-side.component';
import { TopLoginComponent } from './top-login/top-login.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    TranslatePipe,
    // MatSidenavModule,
    SignSideComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  openLogin = false;

  constructor(
    @Inject(AUTHOR_GITHUB) public authorGithub: string,
    private langService: LanguageService,
  ) {

  }
}

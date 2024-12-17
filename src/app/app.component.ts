import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';
import { RouterOutlet } from '@angular/router';
import { GlobalConstants } from './common/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers: [GlobalConstants],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-pc-front';

  constructor(private langService: LanguageService) {
    this.langService.setLanguage('pt-br');
  }
}

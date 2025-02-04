import { Injectable } from '@angular/core';

import ptBr from 'src/assets/i18n/pt-br.json';

const TRANSLATIONS = {
  'pt-br': ptBr,
  'en': ptBr,
}

type LanguageCode = keyof typeof TRANSLATIONS;

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: LanguageCode = 'pt-br';

  public getCurrentLanguage(): LanguageCode {
    return this.currentLanguage;
  }

  constructor() { };

  setLanguage(lang: LanguageCode) {
		if (TRANSLATIONS[lang]) {
      this.currentLanguage = lang;
    } else {
      console.warn(`Idioma ${lang} não encontrado. Uso padrão ${this.currentLanguage}.`)
    }
  }

  translate(key: string): string {
    const keys = key.split('.');
    let translation: any = TRANSLATIONS[this.currentLanguage];

    for (const k of keys) {
      translation = translation ? translation[k] : null;
    }

    return translation || key;
  }
}

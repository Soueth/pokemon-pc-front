import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LanguageService] });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default language are pt-br', () => {
    expect(service.getCurrentLanguage()).toBe('pt-br');
  });

  it('shoud set language as en', () => {
    service.setLanguage('en');
    expect(service.getCurrentLanguage()).toBe('en');
  })

  it('shoud recovery successful a translated key', () => {
    const translation = service.translate('formErros.required');
    expect(translation).toEqual('Campo obrigatório');
  })
});
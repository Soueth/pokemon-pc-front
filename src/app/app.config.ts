import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara'; // Tema Lara tem alguns componente e estilos bugados
// import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withI18nSupport()),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
          preset: Lara,
          options: {
            darkModeSelector: '.light', // system, .light, .dark (not work)
          }
        }
    })
  ]
};

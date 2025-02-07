import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Provider } from '@angular/core';
import { TestModuleMetadata } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

// export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");
export const APP_URL = 'localhost:4200';
export const AUTHOR_GITHUB = 'https://github.com/Soueth';
export const ICON_PATH = 'assets/icons/images';

// export interface AppConfig {
//   appName: string;
//   version: string;
// }

export const GlobalConstants: Provider[] = [
    {
        provide: APP_URL,
        useValue: 'localhost:4200',
    },
    {
        provide: AUTHOR_GITHUB,
        useValue: 'https://github.com/Soueth',
    },
    {
        provide: ICON_PATH,
        useValue: 'assets/icons/images',
    },
];

export const CommonTesting: TestModuleMetadata = {
    imports: [
        // AppComponent,
        // BrowserAnimationsModule,
    ],
    providers: [
        ...GlobalConstants,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
        { provide: ActivatedRoute, useValue: {} },
    ],
};

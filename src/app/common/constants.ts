import { InjectionToken, Provider } from "@angular/core";

// export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");
export const APP_URL = new InjectionToken<string>("APP_URL");
export const AUTHOR_GITHUB = new InjectionToken<string>('AUTHOR_GITHUB');

// export interface AppConfig {
//   appName: string;
//   version: string;
// }

export const GlobalConstants: Provider[] = [
  {
    provide: APP_URL,
    useValue: 'localhost:4200'
  },
  {
    provide: AUTHOR_GITHUB,
    useValue: 'https://github.com/Soueth',
  }
]

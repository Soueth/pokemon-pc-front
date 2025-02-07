import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgIconLoader {
  private http = inject(HttpClient);

  loadSvg(url: string): Promise<string> {
    return lastValueFrom(this.http.get(url, { responseType: 'text' }));
  }
}

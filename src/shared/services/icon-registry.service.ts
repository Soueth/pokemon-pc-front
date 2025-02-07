import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitize: DomSanitizer,
  ) { }

  registerIcons() {
    // this.matIconRegistry.addSvgIcon(
    //   'potion_icon',
    //   this.domSanitize.bypassSecurityTrustResourceUrl('assets/icons/svg/potion.svg')
    // );
  }
}

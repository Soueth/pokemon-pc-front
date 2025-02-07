import { ChangeDetectorRef, Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [ 
    Menubar,
    NgIcon,
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
})
export class TopMenuComponent {
  items: MenuItem[] = MenuItems;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Força a detecção de mudanças após a view estar inicializada
    this.cd.detectChanges();
  }
}

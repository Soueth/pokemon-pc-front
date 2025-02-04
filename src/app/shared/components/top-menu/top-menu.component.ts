import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [ Menubar ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss'
})
export class TopMenuComponent {
  items: MenuItem[] = MenuItems;
}

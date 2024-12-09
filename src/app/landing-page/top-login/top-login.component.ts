import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-top-login',
  standalone: true,
  imports: [
    // Menubar,
    MatIconModule,
  ],
  templateUrl: './top-login.component.html',
  styleUrl: './top-login.component.scss'
})
export class TopLoginComponent {
  items = [
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]
}

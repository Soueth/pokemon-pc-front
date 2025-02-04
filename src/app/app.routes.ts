import { Routes } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';

export const routes: Routes = [
  {
    path: '',
    component: BoxesComponent, // LandingPageComponent
    pathMatch: 'full',
    title: 'Boxes',
  },
];

import { Component } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { BoxesFiltersComponent } from './components/boxes-filters/boxes-filters.component';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [
    BoxComponent,
    BoxesFiltersComponent,
  ],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss'
})
export class BoxesComponent {

}

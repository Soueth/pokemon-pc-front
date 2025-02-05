import { Component } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { BoxesFiltersComponent } from './boxes-filters/boxes-filters.component';

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

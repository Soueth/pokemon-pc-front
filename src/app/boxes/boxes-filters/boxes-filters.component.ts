import { Component } from '@angular/core';
import { CommonFiltersComponent } from 'src/app/shared/components/common-filters/common-filters.component';

@Component({
  selector: 'app-boxes-filters',
  standalone: true,
  imports: [],
  templateUrl: './boxes-filters.component.html',
  styleUrl: './boxes-filters.component.scss'
})
export class BoxesFiltersComponent extends CommonFiltersComponent {

}

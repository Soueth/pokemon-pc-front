import { Component } from '@angular/core';
import { ActiveTeamComponent } from '../shared/components/active-team/active-team.component';
import { TopMenuComponent } from '../shared/components/top-menu/top-menu.component';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [
    TopMenuComponent,
    ActiveTeamComponent,
  ],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss'
})
export class BoxesComponent {

}

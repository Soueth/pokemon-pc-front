import { Component, Input, input, InputSignal, Output, output, OutputEmitterRef, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventEmitter } from 'node:stream';
import { TopLoginComponent } from '../top-login/top-login.component';

@Component({
  selector: 'app-sign-side',
  standalone: true,
  imports: [
    MatSidenavModule,
    TopLoginComponent,
  ],
  templateUrl: './sign-side.component.html',
  styleUrl: './sign-side.component.scss'
})
export class SignSideComponent {
  opened: boolean = false;
}

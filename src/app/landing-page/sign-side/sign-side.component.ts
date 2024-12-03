import { Component, Input, input, InputSignal, Output, output, OutputEmitterRef, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-sign-side',
  standalone: true,
  imports: [
    MatSidenavModule,
  ],
  templateUrl: './sign-side.component.html',
  styleUrl: './sign-side.component.scss'
})
export class SignSideComponent {
  @Input() opened: boolean = false;

  openedChange: OutputEmitterRef<boolean> = output<boolean>();

  emitOpen: any = () => this.openedChange.emit(this.opened);
}

import { NgTemplateOutlet } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { TooltipErrorComponent } from 'src/app/common/components/tooltip-error/tooltip-error.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { ILogin, ISignUp, SignTypes } from './../landing-page.types';

@Component({
  selector: 'app-sign-side',
  standalone: true,
  imports: [
    MatSidenavModule,
    ButtonModule,
    TabsModule,
    TranslatePipe,
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
    TooltipErrorComponent,
  ],
  templateUrl: './sign-side.component.html',
  styleUrl: './sign-side.component.scss'
})
export class SignSideComponent {
  opened: boolean = false;

  formLogin: FormGroup;
  formSignUp: FormGroup;

  index = input<number>(0);
  submitted = signal<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.formLogin = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, Validators.required],
    })

    this.formSignUp = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
      confirmPassword: [undefined, Validators.required],
    })
  }

  onSubmit(method: SignTypes) {
    if (method == 'login') {
      this.login();
      return;
    }

    if (method =='sign-up') {
      this.signUp();
      return;
    }

    console.error('Método de login inválido', method);
  }

  login() {
    // TODO: Implement login logic
    this.submitted.set(true);
    if (!this.formLogin.valid) return;

    const values: ILogin = this.formLogin.getRawValue();

    this.authService.login(values);
  }

  signUp() {
    this.submitted.set(true);
    if (!this.formSignUp.valid) return;

    const values: ISignUp = this.formSignUp.getRawValue();

    this.authService.signUp(values);
  }
}

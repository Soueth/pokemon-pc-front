import { AuthService } from './../../../shared/services/auth.service';
import { ILogin, ISignUp, SignTypes } from './../landing-page.types';
import { Component, Input, input, InputSignal, Output, output, OutputEmitterRef, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopLoginComponent } from '../top-login/top-login.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { FloatLabel } from 'primeng/floatlabel';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-sign-side',
  standalone: true,
  imports: [
    MatSidenavModule,
    TopLoginComponent,
    TabsModule,
    TranslatePipe,
    FloatLabel,
    ReactiveFormsModule,
    NgTemplateOutlet,
  ],
  templateUrl: './sign-side.component.html',
  styleUrl: './sign-side.component.scss'
})
export class SignSideComponent {
  opened: boolean = false;

  formLogin: FormGroup;
  formSignUp: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.formLogin = this.formBuilder.group({
      email: [undefined, Validators.required],
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
    if (!this.formLogin.valid) return;

    const values: ILogin = this.formLogin.getRawValue();

    this.authService.login(values);
  }

  signUp() {
    // TODO: Implement signup logic
    if (!this.formSignUp.valid) return;

    const values: ISignUp = this.formSignUp.getRawValue();

    this.authService.signup(values);
  }
}

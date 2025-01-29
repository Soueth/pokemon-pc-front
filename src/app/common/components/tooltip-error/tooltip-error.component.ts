import { LanguageService } from './../../../../shared/services/language.service';
import { ChangeDetectionStrategy, Component, computed, forwardRef, HostBinding, Signal, signal, WritableSignal } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    AbstractControl,
    ValidationErrors,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlertCircle } from '@ng-icons/feather-icons';
import { Tooltip } from 'primeng/tooltip';
import { isEmpty } from '../../helpers/functions';

@Component({
    selector: 'app-tooltip-error',
    standalone: true,
    imports: [NgIcon, Tooltip],
    templateUrl: './tooltip-error.component.html',
    styleUrl: './tooltip-error.component.scss',
    viewProviders: [
        provideIcons({
            featherAlertCircle,
        }),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TooltipErrorComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => TooltipErrorComponent),
            multi: true,
        },
    ],

})
export class TooltipErrorComponent implements ControlValueAccessor {
    value: string = '';
    private onChange: (value: string) => void = () => {};
    private onTouched: () => void = () => {};

    errors: WritableSignal<string> = signal<string>('');
    hasErrors = computed(() => this.errors() !== '');
    updating = false;

    constructor(
        private languageService: LanguageService,
    ) {}

    // Atualiza o valor quando o Angular chama o método
    writeValue(value: string): void {
        this.value = value || '';
    }

    // Registra o callback de mudança do Angular
    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    // Registra o callback para quando o controle for tocado
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // Atualiza o modelo quando o valor do input muda
    onInput(value: string): void {
        this.value = value;
        this.onChange(value);
        this.onTouched();
    }

    validate(control: AbstractControl): ValidationErrors | null {
        const errors = control.errors;

        if (!errors && !isEmpty(this.errors())) {
            this.errors.set('');
        } else if (errors && !control.pristine) {
            const transaltedErrors = Object.keys(errors)
                .map((error) => this.languageService.translate(`formErros.${error}`))
                .join('\n');

            this.errors.set(transaltedErrors);
        }

        if (!this.updating) {
            this.updating = true; // Marca que estamos atualizando

            // Força atualização dos validadores, se necessário
            setTimeout(() => {
              control.updateValueAndValidity({ emitEvent: false });
              this.updating = false; // Libera para futuras atualizações
            }, 0);
        }

        return null;
    }

    @HostBinding('class.visible')
    get isVisible() {
        return this.hasErrors();
    };
}

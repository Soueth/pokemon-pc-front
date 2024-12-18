import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideInRightAnimation = trigger('slideInRight', [
    state(
        'hidden',
        style({
            transform: 'translateX(-100%)',
            opacity: 0
        })
    ),
    state(
        'visible',
        style({
            transform: 'translateX(0)',
            opacity: 1
        })
    ),
    transition('hidden => visible', [
        animate('500ms ease-out'),
    ])
])
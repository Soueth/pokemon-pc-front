import { animate, animation, style, transition, trigger, useAnimation } from "@angular/animations";

// Animações reutilizáveis
export const slideInAnimation = animation([
    style({
        transform: 'translateX({{ translateX }})',
        opacity: '{{ opacity }}',
        cursor: 'auto',
        pointerEvents: 'none',
    }),
    animate('0.8s ease-out'),
])

// Animações extendidas
export const slideInRight = trigger('slideInRight', [
    transition('hidden => visible', [
        useAnimation(slideInAnimation, {
            params: {
                translateX: '-100%',
                opacity: 1,
            }
        })
    ])
])

export const slideInLeft = trigger('slideInLeft', [
    transition('hidden => visible', [
        useAnimation(slideInAnimation, {
            params: {
                translateX: '100%',
                opacity: 1,
            }
        })
    ])
])
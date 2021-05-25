import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const ProductAnimation = trigger( 'ProductAnimation', [
  state('start', style({transform: 'scale(1)'})),
  state('end', style({'z-index': 100, transform: 'scale(1.2)'})),
  transition('start <=> end', animate(300))
])

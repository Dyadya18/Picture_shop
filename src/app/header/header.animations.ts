import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {delay} from 'rxjs/operators';

export const HeaderAnimation = trigger( 'Size', [
  state('start', style({transform: 'scale(1)'})),
  transition('start <=> *', animate( 1500, keyframes([
    style({transform: 'scale(1)'}),
    style({transform: 'scale(1.5)'}),
    style({transform: 'scale(1)'})
  ])))
]);

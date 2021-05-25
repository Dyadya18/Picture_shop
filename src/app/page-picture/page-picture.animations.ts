import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

export const PagePictureAnimation = trigger('FadeIn', [
  transition(':enter', useAnimation(fadeIn, {
    params: { timing: 5, delay: 0.3 }
}))
]);

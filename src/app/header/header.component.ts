import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output} from '@angular/core';
import {CategoryPictureService} from '../shared/services/category-picture/category-picture.service';
import {Router} from '@angular/router';
import {Select} from '@ngxs/store';
import {BucketState} from '../shared/state/bucket.state';
import {Observable} from 'rxjs';
import {CategoryState} from '../shared/state/category.state';
import {Category} from '../shared/models/category.model';
import {HeaderAnimation} from './header.animations';

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [HeaderAnimation]
})

export class HeaderComponent{
  constructor(
    public router: Router,
  ) {}
  // @ts-ignore
  @Select(BucketState.getStateAnimateBucket) getStateAnimate$: Observable<string>;
  // @ts-ignore
  @Select(BucketState.getCountPicture) countPicture$: Observable<number>;
  // @ts-ignore
  @Select(BucketState.getTooltipPicture) tooltip$: Observable<string>;
  // @ts-ignore
  @Select(CategoryState.getCategory) category$: Observable<Category[]>;
}

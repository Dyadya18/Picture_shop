import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {PictureState} from '../shared/state/picture.state';
import {Observable} from 'rxjs';
import {Picture} from '../shared/models/picture.model';
import {CategoryState} from '../shared/state/category.state';
import {Category} from '../shared/models/category.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {

  constructor() { }

  // @ts-ignore
  @Select(PictureState.getPicture) pictures$: Observable<Picture[]>;
  // @ts-ignore
  @Select(CategoryState.getCategory) category$: Observable<Category[]>;
  ngOnInit(): void {
  }

}

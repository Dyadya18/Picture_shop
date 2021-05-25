import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ProductCategoryService} from '../shared/services/product-category/product-category.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CategoryPictureService} from '../shared/services/category-picture/category-picture.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {PictureState} from '../shared/state/picture.state';
import {Picture} from '../shared/models/picture.model';
import {CategoryState} from '../shared/state/category.state';
import {SelectCategory} from '../shared/actions/category.actions';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridComponent implements OnInit {

  // @ts-ignore
  @Select(CategoryState.getSelectedCategory) getSelectedCategory$: Observable<string>;
  // @ts-ignore
  @Select(PictureState.getSelectedCategoryPicture) getSelectedPictures$: Observable<Picture[]>;
  // @ts-ignore
  category = '';
  constructor(public activaRouter: ActivatedRoute, private store: Store, public title: Title, public meta: Meta) {
    title.setTitle('Grid-pictures');
    meta.addTag({name: title.getTitle(), content: 'Picture'});
  }

  ngOnInit(): void {
    this.activaRouter.queryParams.subscribe( (params: Params) => {
      this.store.dispatch(new SelectCategory(params.category));
      // @ts-ignore
    });
    this.getSelectedCategory$.subscribe(value => this.category = value);
  }
}

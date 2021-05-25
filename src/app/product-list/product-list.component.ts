import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CategoryPictureService} from '../shared/services/category-picture/category-picture.service';
import { ProductCategoryService} from '../shared/services/product-category/product-category.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {Picture} from '../shared/models/picture.model';
import {Select, Store} from '@ngxs/store';
import {newLineWithIndentation} from 'tslint/lib/utils';
import {SelectCategory} from '../shared/actions/category.actions';
import {CategoryState} from '../shared/state/category.state';
import {PictureState} from '../shared/state/picture.state';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  // @ts-ignore
  @Select(CategoryState.getSelectedCategory) getSelectedCategory$: Observable<string>;
  // @ts-ignore
  @Select(PictureState.getSelectedCategoryPicture) getSelectedPictures$: Observable<Picture[]>;
  category = '';
  constructor(private store: Store , public activaRouter: ActivatedRoute, public title: Title, public meta: Meta) {
    title.setTitle('List-pictures');
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

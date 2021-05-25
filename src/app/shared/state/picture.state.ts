import {Picture} from '../models/picture.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import { LoadPicture, SelectPicture} from '../actions/picture.actions';
import {ProductCategoryService} from '../services/product-category/product-category.service';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CategoryState, CategoryStateModel} from './category.state';

export class PictureStateModel {
  // @ts-ignore
  pictures: Picture[];
  // @ts-ignore
  selectedPictures: number;
}

@State<PictureStateModel>({
  name: 'pictures',
  defaults: {
    pictures: [],
    selectedPictures: -1
  }
})

@Injectable()
export class PictureState {
  @Selector()
  static getPicture(state: PictureStateModel): Picture[]{
    return state.pictures;
  }

  @Selector()
  static getBestSellersPictures(state: PictureStateModel): Picture[]{
    return [...state.pictures].sort((a, b) => b.seller - a.seller);
  }

  @Selector()
  static getMostPopularPictures(state: PictureStateModel): Picture[]{
    return [...state.pictures].sort((a, b) => b.countSales - a.countSales).slice(0, 3);
  }

  @Selector()
  static getTopRankingPictures(state: PictureStateModel): Picture[]{
    return [...state.pictures].sort((a, b) => b.rank - a.rank).slice(0, 3);
  }

  @Selector([CategoryState])
  static getSelectedCategoryPicture(statePicture: PictureStateModel, stateCategory: CategoryStateModel): Picture[]{
    return statePicture.pictures.filter(value => value.category === stateCategory.selectedCategory);
  }

  constructor(private productCategoryService: ProductCategoryService) {
  }

  @Action(LoadPicture)
  load({patchState}: StateContext<PictureStateModel>){
    return this.productCategoryService.fetch().pipe(
      tap(
        pictures => {
          patchState({
            pictures
          });
        }
      )
    );
  }

  @Action(SelectPicture)
  select({patchState}: StateContext<PictureStateModel>, {payload}: SelectPicture){
    patchState({selectedPictures: payload});
  }
}



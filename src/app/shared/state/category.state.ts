import {Action, Select, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {LoadCategory, SelectCategory} from '../actions/category.actions';
import {CategoryPictureService} from '../services/category-picture/category-picture.service';
import {tap} from 'rxjs/operators';
import {Category} from '../models/category.model';

export class CategoryStateModel {
  // @ts-ignore
  category: Category[];
  // @ts-ignore
  selectedCategory: string;
}

@State<CategoryStateModel>({
  name: 'category',
  defaults: {
    category: [],
    selectedCategory: ''
  }
})

@Injectable()
export class CategoryState {
  @Selector()
  static getCategory(state: CategoryStateModel): Category[]{
    return state.category;
  }

  @Selector()
  static getSelectedCategory(state: CategoryStateModel): string{
    // @ts-ignore
    return state.category.find(value => value.value === state.selectedCategory).value;
  }
  constructor(private categoryService: CategoryPictureService) {
  }
  @Action(LoadCategory)
  // tslint:disable-next-line:typedef
  load({patchState}: StateContext<CategoryStateModel>){
    return this.categoryService.getCategory().pipe(
      tap(
        categories => {
          patchState({category: categories});
        }));
  }
  @Action(SelectCategory)
  select({patchState}: StateContext<CategoryStateModel>, {payload}: SelectCategory): void{
    patchState({
      selectedCategory: payload
    });
  }
}

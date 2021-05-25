import {Picture} from '../models/picture.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AddPictureBucket, RemovePictureBucket} from '../actions/bucket.actions';

export class BucketStateModel{
  // @ts-ignore
  bucket: Picture[];
  // @ts-ignore
  countPicture: number;
  // @ts-ignore
  tooltipNamePicture: string[];
  // @ts-ignore
  subtotal: number;
  // @ts-ignore
  tax: number;
  // @ts-ignore
  stateAnimateBucket: string;
}

@State<BucketStateModel>({
  name: 'bucket',
  defaults: {
    bucket: [],
    countPicture: 0,
    tooltipNamePicture: [],
    subtotal: 0,
    tax: 17,
    stateAnimateBucket: 'start'
  }
})

@Injectable()
export class BucketState {
  @Selector()
  static getStateAnimateBucket(state: BucketStateModel): string{
    return state.stateAnimateBucket;
  }
  @Selector()
  static getSubtotal(state: BucketStateModel): number{
    return state.subtotal;
  }
  @Selector()
  static getTax(state: BucketStateModel): number{
    return state.tax;
  }
  @Selector()
  static getTotal(state: BucketStateModel): number{
    return state.subtotal + ((state.subtotal * state.tax) / 100);
  }
  @Selector()
  static getBucket(state: BucketStateModel): Picture[]{
    return state.bucket;
  }
  @Selector()
  static getCountPicture(state: BucketStateModel): number{
    return state.countPicture;
  }
  @Selector()
  static getTooltipPicture(state: BucketStateModel): string{
    return state.tooltipNamePicture.join(' ');
  }
  @Action(AddPictureBucket)
  add({patchState, getState}: StateContext<BucketStateModel>, {payload}: AddPictureBucket): void{
    const bucketState = getState();
    patchState({
      bucket: [...bucketState.bucket, payload],
      countPicture: bucketState.countPicture + 1,
      tooltipNamePicture: [...bucketState.tooltipNamePicture, payload.name],
      subtotal: bucketState.subtotal + payload.seller,
      stateAnimateBucket: bucketState.stateAnimateBucket === 'start' ? 'end' : 'start'
    });
  }

  @Action(RemovePictureBucket)
  remove({patchState, getState}: StateContext<BucketStateModel>, {payload}: RemovePictureBucket): void{
    patchState({
      bucket: getState().bucket.filter(value => value.id !== payload),
      countPicture: getState().countPicture - 1,
      // tslint:disable-next-line:max-line-length
      tooltipNamePicture: getState().bucket.filter(value => value.id !== payload).map(value => value.name),
      subtotal: getState().subtotal - getState().bucket.filter(value => value.id === payload).map(value => value.seller)[0]
    });
  }
}

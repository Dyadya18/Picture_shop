import {Picture} from '../models/picture.model';

export class AddPictureBucket{
  static readonly type = '[PICTURE] Add';
  constructor(public payload: Picture) {}
}

export class RemovePictureBucket{
  static readonly type = '[PICTURE] Remove';
  constructor(public payload: number) {}
}

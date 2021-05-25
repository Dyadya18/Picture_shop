import {Picture} from '../models/picture.model';

export class LoadPicture {
  static readonly type = '[PICTURE] Load';
}
export class SelectPicture {
  static readonly type = '[PAINTING] Select'
  constructor(public payload: number) {}
}

import {Comment} from '../models/comment.model';

export class AddComment {
  static readonly type = '[COMMENT] Add';
  constructor(public payload: Comment) {}
}
export class LoadComment {
  static readonly type = '[COMMENT] Load';
}


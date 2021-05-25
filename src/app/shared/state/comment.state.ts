import {Comment} from '../models/comment.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddComment, LoadComment} from '../actions/comment.actions';
import {Injectable} from '@angular/core';
import {CommentCardService} from '../services/comment-card/comment-card.service';
import {tap} from 'rxjs/operators';
import {PictureState, PictureStateModel} from './picture.state';

export class CommentStateModel {
  // @ts-ignore
  comments: Comment[];
}
@State<CommentStateModel>({
  name: 'comments',
  defaults: {
    comments: []
  }
})
@Injectable()
export class CommentState{
  @Selector()
  // tslint:disable-next-line:typedef
  static getComments(state: CommentStateModel){
    return state.comments;
  }
  @Selector([PictureState])
  static getCommentByProduct(state: CommentStateModel, statePicture: PictureStateModel): Comment[]{
    return state.comments.filter(value => value.idPicture === statePicture.selectedPictures);
  }
  constructor(private commentsService: CommentCardService) {
  }
  @Action(AddComment)
  // tslint:disable-next-line:typedef
  add({patchState, getState}: StateContext<CommentStateModel>, {payload}: AddComment){
    return this.commentsService.addComment(payload).pipe(
      tap( result => {
          const comments = getState();
          patchState({
            comments: [...comments.comments, result]
          });
        }
      )
    );
  }
  @Action(LoadComment)
  // tslint:disable-next-line:typedef
  load({patchState}: StateContext<CommentStateModel>){
    return this.commentsService.fetch().pipe(
      tap(
        comments => {
          patchState({comments});
        }));
  }
}

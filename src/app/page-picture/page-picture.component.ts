import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductCategoryService} from '../shared/services/product-category/product-category.service';
import {CommentCardService} from '../shared/services/comment-card/comment-card.service';
import {CommentState} from '../shared/state/comment.state';
import {Observable} from 'rxjs';
import {Comment} from '../shared/models/comment.model';
import {Select, Store} from '@ngxs/store';
import {SelectPicture} from '../shared/actions/picture.actions';
import {AddPictureBucket} from '../shared/actions/bucket.actions';
import {Picture} from '../shared/models/picture.model';
import {Meta, Title} from '@angular/platform-browser';
import {PagePictureAnimation} from './page-picture.animations';

@Component({
  selector: 'app-page-picture',
  templateUrl: './page-picture.component.html',
  styleUrls: ['./page-picture.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [PagePictureAnimation]
})
export class PagePictureComponent implements OnInit {

  isBuy = false;
  // @ts-ignore
  idPicture = -1;
  // @ts-ignore
  picture: Picture = {};
  // @ts-ignore
  @Select(CommentState.getCommentByProduct) getComments$: Observable<Comment[]>;
  // tslint:disable-next-line:max-line-length
  constructor(public router: ActivatedRoute,
              public categoryPictureService: ProductCategoryService,
              private store: Store,
              public title: Title,
              public meta: Meta) {
    title.setTitle('Select picture');
    meta.addTag({name: title.getTitle(), content: 'Buy'});
  }
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      // @ts-ignore
      this.idPicture = +params.id;
    });
    this.categoryPictureService.findPicture(this.idPicture).subscribe(
      res => {
        // @ts-ignore
        this.picture = res;
      }
    );
    this.SelectPicture(this.idPicture);
  }
  SelectPicture(idPicture: number): void{
    this.store.dispatch(new SelectPicture(idPicture));
  }
  onBuyclick(){
    this.store.dispatch(new AddPictureBucket(this.picture));
    this.isBuy = true;
  }
}

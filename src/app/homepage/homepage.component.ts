import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, repeat, take} from 'rxjs/operators';
import {DragScrollComponent} from 'ngx-drag-scroll';
import {Select} from '@ngxs/store';
import {PictureState} from '../shared/state/picture.state';
import {CommentState} from '../shared/state/comment.state';
import {Comment} from '../shared/models/comment.model';
import {Picture} from '../shared/models/picture.model';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {

  // @ts-ignore
  @Select(PictureState.getBestSellersPictures) bestSellers$: Observable<Picture[]>;
  // @ts-ignore
  @Select(PictureState.getMostPopularPictures) mostPopular$: Observable<Picture[]>;
  // @ts-ignore
  @Select(PictureState.getTopRankingPictures) topRanked$: Observable<Picture[]>;
  // @ts-ignore
  @Select(CommentState.getComments) getComment$: Observable<Comment[]>;

  constructor(protected cd: ChangeDetectorRef, public title: Title, public meta: Meta) {
    title.setTitle('Picture-shop');
    meta.addTag({name: title.getTitle(), content: 'Picture'});
  }
  // @ts-ignore
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  // tslint:disable-next-line:no-output-on-prefix
  StateBestSellers: Picture[] = [];
  BestSellers: Picture[] = [];
  moveLeft() {
    this.ds.moveLeft();
  }
  moveRight() {
    this.ds.moveRight();
  }
  ngOnInit(): void {
    this.bestSellers$.subscribe(value =>  this.StateBestSellers = value);
    this.getBestSellers();
    this.cd.detectChanges();
  }

  getBestSellers() {
    interval(3000).pipe(take(5), repeat())
      .subscribe((i) => {
        this.BestSellers = [this.StateBestSellers[i], this.StateBestSellers[i + 1], this.StateBestSellers[i + 2]];
        this.cd.detectChanges();
      });
  }

}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Picture} from '../shared/models/picture.model';
import {Select, Store} from '@ngxs/store';
import {BucketState} from '../shared/state/bucket.state';
import {Observable} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-backet-page',
  templateUrl: './backet-page.component.html',
  styleUrls: ['./backet-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BacketPageComponent implements OnInit {

  // @ts-ignore
  getSubtotal: number;
  // @ts-ignore
  getTax: number;
  // @ts-ignore
  total: number;
  constructor(private store: Store, private cd: ChangeDetectorRef, public title: Title, public meta: Meta) {
    title.setTitle('Basket-page')
    meta.addTag({name: title.getTitle(), content: 'Pictures'})
    this.store.select(state => state.bucket.subtotal).subscribe(value => this.getSubtotal = value);
    // @ts-ignore
    this.getTax$.subscribe(value => this.getTax = value);
    // @ts-ignore
    this.getTotal$.subscribe(value => this.total = value);
  }
  // @ts-ignore
  @Select(BucketState.getBucket) getBucket$: Observable<Picture[]>;
  // @ts-ignore
  @Select(BucketState.getTax) getTax$: Observable<number>;
  // @ts-ignore
  @Select(BucketState.getTotal) getTotal$: Observable<number>;
  ngOnInit(): void {
    this.cd.detectChanges();
  }

}

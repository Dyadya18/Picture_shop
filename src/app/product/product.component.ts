import {ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddPictureBucket} from '../shared/actions/bucket.actions';
import {Picture} from '../shared/models/picture.model';
import {ProductAnimation} from './product.animations';
import {start} from 'repl';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[ProductAnimation]
})

export class ProductComponent implements OnInit {
  // @ts-ignore
  stateAnimation = 'start';
  // @ts-ignore
  @Input() product: Picture;
  isBuy = false;
  constructor(private store: Store, private element: ElementRef) { }
  // tslint:disable-next-line:typedef
  onBuyclick(){
    this.store.dispatch(new AddPictureBucket(this.product));
    this.isBuy = true;
  }

  @HostListener('mouseenter') onEnter(){
    this.stateAnimation = 'end';
  }
  @HostListener('mouseleave') onLeave(){
    this.stateAnimation = 'start';
  }

  ngOnInit(): void {
  }

}

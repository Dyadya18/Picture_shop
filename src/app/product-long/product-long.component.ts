import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Picture} from '../shared/models/picture.model';


@Component({
  selector: 'app-product-long',
  templateUrl: './product-long.component.html',
  styleUrls: ['./product-long.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductLongComponent implements OnInit {
  // @ts-ignore
  @Input() picture: Picture;
  constructor() { }

  ngOnInit(): void {
  }
}

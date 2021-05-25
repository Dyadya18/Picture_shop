import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {RemovePictureBucket} from '../shared/actions/bucket.actions';
import {Picture} from '../shared/models/picture.model';

@Component({
  selector: 'app-bucket-picture',
  templateUrl: './bucket-picture.component.html',
  styleUrls: ['./bucket-picture.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BucketPictureComponent implements OnInit {

  // @ts-ignore
  @Input() picture: Picture;
  constructor(private store: Store, private cd: ChangeDetectorRef) { }

  RemovePictureBucket(id: number): void{
    this.store.dispatch(new RemovePictureBucket(id));
    this.cd.detectChanges();
  }
  ngOnInit(): void {
  }

}

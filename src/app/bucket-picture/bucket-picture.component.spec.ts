import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketPictureComponent } from './bucket-picture.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BucketState} from '../shared/state/bucket.state';
import {By} from '@angular/platform-browser';


describe('BucketPictureComponent', () => {
  let component: BucketPictureComponent;
  let fixture: ComponentFixture<BucketPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([
          BucketState,
        ]),
        HttpClientTestingModule,
      ],
      declarations: [ BucketPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

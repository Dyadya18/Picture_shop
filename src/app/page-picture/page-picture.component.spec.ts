import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePictureComponent } from './page-picture.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgxsModule} from '@ngxs/store';
import {CommentState} from '../shared/state/comment.state';
import {BucketState} from '../shared/state/bucket.state';
import {PictureState} from '../shared/state/picture.state';

describe('PagePictureComponent', () => {
  let component: PagePictureComponent;
  let fixture: ComponentFixture<PagePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePictureComponent ],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          CommentState,
          BucketState,
          PictureState
        ]),
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

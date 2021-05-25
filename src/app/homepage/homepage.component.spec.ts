import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HomepageComponent} from './homepage.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PictureState} from '../shared/state/picture.state';
import {CommentState} from '../shared/state/comment.state';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          PictureState,
          CommentState
        ]),
        HttpClientTestingModule
      ],
      declarations: [ HomepageComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCardComponent } from './comment-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CommentCardComponent', () => {
  let component: CommentCardComponent;
  let fixture: ComponentFixture<CommentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

      ],
      declarations: [ CommentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommentComponent } from './form-comment.component' ;
import {NgxsModule} from '@ngxs/store';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommentState} from '../shared/state/comment.state';

describe('FormCommentComponent', () => {
  let component: FormCommentComponent;
  let fixture: ComponentFixture<FormCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommentComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          CommentState
        ]),
        HttpClientTestingModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create form with controls', () => {
    expect(component.form.contains('user')).toBeTruthy();
    expect(component.form.contains('comment')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('score')).toBeTruthy();
  });
  it('should validation', () => {
    const user = component.form.get('user');
    const email = component.form.get('email');
    const score = component.form.get('score');
    expect(user?.setValue('')).toBeFalsy();
    expect(email?.setValue('')).toBeFalsy();
    expect(score?.setValue('')).toBeFalsy();
  });
});

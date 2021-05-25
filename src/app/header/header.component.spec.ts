import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component' ;
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {CategoryState} from '../shared/state/category.state';
import {PictureState} from '../shared/state/picture.state';
import {BucketState} from '../shared/state/bucket.state';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PhoneNumberPipe} from '../shared/pipes/phone-number.pipe';
import {SharedModule} from '../shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule,
        NgxsModule.forRoot([
          CategoryState,
          BucketState
        ]),
        HttpClientTestingModule
      ],
      declarations: [ HeaderComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuBestComponent } from './list-menu-best.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {CategoryState} from '../shared/state/category.state';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ListMenuComponent', () => {
  let component: ListMenuBestComponent;
  let fixture: ComponentFixture<ListMenuBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          CategoryState,
        ]),
        HttpClientTestingModule
      ],
      declarations: [ ListMenuBestComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

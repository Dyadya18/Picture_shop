import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductLongComponent } from './product-long.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {CategoryState} from '../shared/state/category.state';
import {PictureState} from '../shared/state/picture.state';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ProductListComponent', () => {
  let component: ProductLongComponent;
  let fixture: ComponentFixture<ProductLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          CategoryState,
          PictureState
        ]),
        HttpClientTestingModule
      ],
      declarations: [ ProductLongComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGridComponent } from './product-grid.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {CategoryState} from '../shared/state/category.state';
import {PictureState} from '../shared/state/picture.state';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

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
      declarations: [ ProductGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

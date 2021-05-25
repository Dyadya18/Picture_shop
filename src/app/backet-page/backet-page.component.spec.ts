import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacketPageComponent } from './backet-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {BucketState} from '../shared/state/bucket.state';
import {By} from '@angular/platform-browser';
import {ProductComponent} from '../product/product.component';

describe('BacketPageComponent', () => {
  let component: BacketPageComponent;
  // tslint:disable-next-line:prefer-const
  let componentPicture: ProductComponent;
  let fixture: ComponentFixture<BacketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([
          BucketState,
        ])
      ],
      declarations: [ BacketPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tax property', () => {

    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.get-tax'));
    const el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(17);
  });
});

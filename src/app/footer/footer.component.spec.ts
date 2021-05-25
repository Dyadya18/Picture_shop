import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component' ;
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        RouterTestingModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

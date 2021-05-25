import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ProductCategoryService} from './product-category.service';


describe('ProductCategoryPictureService', () => {
  let service: ProductCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(ProductCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

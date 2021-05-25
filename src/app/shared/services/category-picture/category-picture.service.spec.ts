import { TestBed } from '@angular/core/testing';

import { CategoryPictureService } from './category-picture.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('CategoryPictureService', () => {
  let service: CategoryPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(CategoryPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

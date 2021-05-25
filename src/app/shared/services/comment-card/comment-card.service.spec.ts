import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CommentCardService} from './comment-card.service';
import {TestBed} from '@angular/core/testing';


describe('CommentCardService', () => {
  let service: CommentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(CommentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

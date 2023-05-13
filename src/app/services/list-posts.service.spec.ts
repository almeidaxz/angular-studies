import { TestBed } from '@angular/core/testing';

import { ListPostsService } from './list-posts.service';

describe('ListPostsService', () => {
  let service: ListPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

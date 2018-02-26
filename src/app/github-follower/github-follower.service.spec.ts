import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowerService } from './github-follower.service';

describe('GithubFollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollowerService]
    });
  });

  it('should be created', inject([GithubFollowerService], (service: GithubFollowerService) => {
    expect(service).toBeTruthy();
  }));
});

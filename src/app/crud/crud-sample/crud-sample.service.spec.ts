import { TestBed, inject } from '@angular/core/testing';

import { CrudSampleService } from './crud-sample.service';

describe('CrudSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudSampleService]
    });
  });

  it('should be created', inject([CrudSampleService], (service: CrudSampleService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { DetailsofworkService } from './detailsofwork.service';

describe('DetailsofworkService', () => {
  let service: DetailsofworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsofworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

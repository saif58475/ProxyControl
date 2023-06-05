import { TestBed } from '@angular/core/testing';

import { LearnerpartnerService } from './learnerpartner.service';

describe('LearnerpartnerService', () => {
  let service: LearnerpartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnerpartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

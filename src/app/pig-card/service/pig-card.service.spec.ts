import { TestBed } from '@angular/core/testing';

import { PigCardService } from './pig-card.service';

describe('PigCardService', () => {
  let service: PigCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

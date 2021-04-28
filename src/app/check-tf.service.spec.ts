import { TestBed } from '@angular/core/testing';

import { CheckTFService } from './check-tf.service';

describe('CheckTFService', () => {
  let service: CheckTFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

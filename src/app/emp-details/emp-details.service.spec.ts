import { TestBed } from '@angular/core/testing';

import { EmpDetailsService } from './emp-details.service';

describe('EmpDetailsService', () => {
  let service: EmpDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

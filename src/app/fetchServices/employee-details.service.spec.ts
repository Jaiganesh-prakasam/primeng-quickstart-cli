import { TestBed } from '@angular/core/testing';

import { EmployeeFetchDetailsService } from './employee-fetch-details.service';

describe('EmployeeDetailsService', () => {
  let service: EmployeeFetchDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFetchDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

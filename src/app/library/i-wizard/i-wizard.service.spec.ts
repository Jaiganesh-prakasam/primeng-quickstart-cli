import { TestBed } from '@angular/core/testing';

import { IWizardService } from './i-wizard.service';

describe('IWizardService', () => {
  let service: IWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

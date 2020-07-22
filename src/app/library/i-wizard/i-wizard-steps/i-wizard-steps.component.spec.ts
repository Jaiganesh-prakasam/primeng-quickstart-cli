import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IWizardStepsComponent } from './i-wizard-steps.component';

describe('IWizardStepsComponent', () => {
  let component: IWizardStepsComponent;
  let fixture: ComponentFixture<IWizardStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IWizardStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IWizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExperienceComponent } from './emp-experience.component';

describe('EmpExperienceComponent', () => {
  let component: EmpExperienceComponent;
  let fixture: ComponentFixture<EmpExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

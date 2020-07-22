import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGeneralComponent } from './emp-general.component';

describe('EmpGeneralComponent', () => {
  let component: EmpGeneralComponent;
  let fixture: ComponentFixture<EmpGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

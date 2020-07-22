import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContactComponent } from './emp-contact.component';

describe('EmpContactComponent', () => {
  let component: EmpContactComponent;
  let fixture: ComponentFixture<EmpContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

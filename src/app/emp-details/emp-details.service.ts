import { Injectable, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../sharedServices/validation.service';
import { EmployeeFetchDetailsService } from '../fetchServices/employee-fetch-details.service';
import { EmpDetails } from '../sharedInterface/emp-details';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Injectable()
export class EmpDetailsService {
  empDetails: FormGroup;
  empGeneral: FormGroup;
  empContact: FormGroup;
  socialInfo: FormArray;
  empExperienceGroup: FormGroup;
  empExperienceArray: FormArray;
  role: any[] = [
    'Junior Software Enginer',
    'Software Enginer',
    'Senior Software Enginer',
    'Manager'
  ];
  lastkeydown = 0;
  roleList = [];
  empSkill: FormGroup;
  empSkillArray: FormArray;
  skillList = [
    'angular',
    'vue',
    'react',
    'nodejs',
    'dotnet',
    'java',
    'cloud'
  ];
  skillListOptions = [];
  id: number;
  errorFormArray = [];
  constructor(
    public fB: FormBuilder,
    public employeeFetchDetailsService: EmployeeFetchDetailsService,
    public router: Router,
    public  datePipe: DatePipe,
    private ref: ChangeDetectorRef) {
    this.empGeneralFormInitiation();
    this.empContactFormInitiation();
    this.empExperienceFormInitiation();
    this.empSkillFormInitiation();
    this.empDetailsFormInitiation();
  }
  fetchAndPopulateEmployeeDetails(id: number): void {
    this.employeeFetchDetailsService.getEmployee(id)
      .subscribe((data) => {
        this.empGeneral.patchValue(data.empGeneral);
        // this.empContact.email.patchValue(data.empContact);
        data.empSkill.forEach((element, i) => {
          if ( data.empSkill.length - 1 !== i) {
            this.addskill();
          }
        });
        this.empSkillArray.patchValue(data.empSkill);

        data.empExperience.forEach((element, i) => {
          if ( data.empExperience.length - 1 !== i) {
            this.addExperience();
          }
        });
        this.empExperienceArray.patchValue(data.empExperience);

        data.empContact.socialInfo.forEach((element, i) => {
          if ( data.empContact.socialInfo.length - 1 !== i) {
            this.addSocialInfo();
          }
        });
        this.empContact.patchValue(data.empContact);
        // important to update the existing id
        this.id = data.id;
      });
  }
  empGeneralFormInitiation(): void {
    this.empGeneral = this.fB.group({
      firstName: [
        '' ,
        [ Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.onlyAlphabetsValidator() ]
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15), ValidationService.onlyAlphabetsValidator()]
      ],
      dob: ['', [Validators.required, ValidationService.ageValidator(), ValidationService.futureDate()]]
    });
  }
  empContactFormInitiation(): void {
    this.socialInfo = this.fB.array([this.socialInfoGroup()], ValidationService.storeSocialMediaTypeValidationobjects());
    this.empContact = this.fB.group({
      email: ['', [Validators.required, ValidationService.emailValidator()]],
      phone: ['', [Validators.required, Validators.minLength(10), ValidationService.phoneNumberValidator()]],
      socialInfo: this.socialInfo
    });
  }
  empExperienceFormInitiation(): void {
    this.empExperienceArray = this.fB.array([this.experienceDetails()]);
    this.empExperienceGroup = this.fB.group({
      empExperienceArray : this.empExperienceArray
    });
  }
  empSkillFormInitiation(): void {
    this.empSkillArray = this.fB.array([this.skillGroup()]);
    this.empSkill = this.fB.group({
      empSkillArray : this.empSkillArray
    });
  }
  empDetailsFormInitiation(): void {
    this.empDetails = this.fB.group ({
      empGeneral: this.empGeneral,
      empContact: this.empContact,
      empSkill: this.empSkillArray,
      empExperience: this.empExperienceArray
    });

  }
  socialInfoGroup(): FormGroup {
    return this.fB.group({
      url: ['', [Validators.required, ValidationService.socialMediaUrlValidator() ]],
      type: ['', [Validators.required, ValidationService.socialMediaTypeValidator()]]
    });
  }
  addSocialInfo(): void {
    this.socialInfo.push( this.socialInfoGroup() );
  }
  deleteSocialInfo(index: number): void {
    if (this.socialInfo.length > 1) {
      this.socialInfo.removeAt(index);
    }
  }
  public addExperience(): void {
    this.empExperienceArray.push( this.experienceDetails() );
  }
  private experienceDetails(): FormGroup {
    return this.fB.group({
      companyName: ['', [Validators.required, Validators.min(3) , Validators.max(25)]],
      location: this.fB.group({
        city: ['', [Validators.required]],
        country: ['', [Validators.required]]
      }),
      companyUrl: ['', [Validators.required]],
      role: ['', [Validators.required]],
      fromDate: ['', [Validators.required, ValidationService.futureDate()]],
      toDate: ['', [Validators.required, ValidationService.futureDate()]],
      experience: [{value: '', disabled: true}, [Validators.required]],
    });
  }
  deleteExperience(index: number): void {
    if (this.empExperienceArray.length > 1) {
      this.empExperienceArray.removeAt(index);
    }
  }

  getRole(index): void {
    const enteredRole = this.empExperienceArray.controls[index].get('role').value;
    this.roleList = [];
    if (enteredRole.length > 2) {
      this.roleList = this.searchFromArray(this.role, enteredRole);
    }
  }
  storeNewRole(index): void {
    const enteredRole = this.empExperienceArray.controls[index].get('role').value;
    if (!this.role.includes(enteredRole)) {
      this.role.push(enteredRole);
    }
  }
  skillGroup(): FormGroup {
    return this.fB.group({
      skill: ['', [Validators.required, Validators.min(3) , Validators.max(25)]],
      rate: ['', [Validators.required, ValidationService.rating()]],
    });
  }
  addskill(): void {
    this.empSkillArray.push( this.skillGroup() );
  }
  deleteSkill(index): void {
    if (this.empSkillArray.length > 1) {
      this.empSkillArray.removeAt(index);
    }
  }
  getSkill(index): void {
    const enteredSkill = this.empSkillArray.controls[index].get('skill').value;
    this.skillListOptions = [];
    if (enteredSkill.length > 2) {
        this.skillListOptions = this.searchFromArray(this.skillList, enteredSkill);
    }
  }
  storeNewSkill(index): void {
    const enteredSkill = this.empSkillArray.controls[index].get('skill').value;
    if (enteredSkill && !this.skillList.includes(enteredSkill)) {
      this.skillList.push(enteredSkill);
    }
  }
  searchFromArray(arr: Array<string>, regex: string): Array<string> {
    const matches = [];
    let i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().includes(regex.toLowerCase())) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }
  formValidation(): void {
    let count = 0;
    if (this.empGeneral.invalid) {
      this.errorFormArray.push('Employee general detils invalid');
      count ++;
    }
    if (
      this.empContact.get('email').invalid ||
      this.empContact.get('phone').invalid ||
      this.socialInfo.invalid
      ) {
      this.errorFormArray.push('Employee contacts invalid');
      count++;
    }
    if (this.empExperienceArray.invalid) {
      this.errorFormArray.push('Employee experience invalid');
      count++;
    }
    if (this.empSkillArray.invalid) {
      this.errorFormArray.push('Employee skills invalid');
      count++;
    }
    if (count === 0) {
      this.submitForm();
    } else {
      this.validateAllFormFields(this.empDetails);
    }
  }
  submitForm(): void {
    if (this.id) {
      this.empDetails.value.id = this.id;
    }
    this.empDetails.value.empGeneral.dob = this.datePipe.transform(this.empDetails.value.empGeneral.dob, 'yyyy-MM-dd' );
    this.employeeFetchDetailsService.addEmployee(this.empDetails.value as EmpDetails).subscribe(employee => {
        this.router.navigate(['/routing/emp-list']);
    });
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach((elementControl: FormGroup) => {
          this.validateAllFormFields(elementControl);
        });
      }
    });
  }
}

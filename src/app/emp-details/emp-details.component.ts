import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDetailsService } from './emp-details.service';
import { FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss'],
  providers: [ EmpDetailsService ]
})
export class EmpDetailsComponent implements OnInit {
  get empGeneralFormGroup(): FormGroup {
    return this.empDetailsService.empGeneral;
  }
  get empContactFormGroup(): FormGroup {
    return this.empDetailsService.empContact;
  }
  get empSocialInfoFormArray(): FormArray {
    return this.empDetailsService.socialInfo;
  }
  get empExperienceFormGroup(): FormGroup {
    return this.empDetailsService.empExperienceGroup;
  }
  get empExperienceFormArray(): FormArray {
    return this.empDetailsService.empExperienceArray;
  }
  get empSkillFormGroup(): FormGroup {
    return this.empDetailsService.empSkill;
  }
  get empSkillFormArray(): FormArray {
    return this.empDetailsService.empSkillArray;
  }
  stepsData = [
    {
      id: 'step1',
      title: 'Employee General Details',
      formValidation: [this.empGeneralFormGroup]
    },
    {
      id: 'step2',
      title: 'Contact',
      formValidation: [
        this.empContactFormGroup.get('email'),
        this.empContactFormGroup.get('phone'),
        this.empSocialInfoFormArray
      ]
    },
    {
      id: 'step3',
      title: 'Experience',
      formValidation: [this.empExperienceFormArray]
    },
    {
      id: 'step4',
      title: 'Skills',
      formValidation: [this.empSkillFormArray]
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private empDetailsService: EmpDetailsService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.orderType === 'update') {
        this.empDetailsService.fetchAndPopulateEmployeeDetails(Number(queryParams.id));
      } else if (queryParams.orderType === 'add') {

      }
    });
  }

  onAddExperience(): void {
    this.empDetailsService.addExperience();
  }
  onDeleteExperience(index: number): void {
    this.empDetailsService.deleteExperience(index);
  }
  onGetRole(index: number): void {
    return this.empDetailsService.getRole(index);
  }
  onStoreNewRole(index: number): void {
    return this.empDetailsService.storeNewRole(index);
  }
  onAddSocialInfo(): void {
    this.empDetailsService.addSocialInfo();
  }
  onDeleteSocialInfo(index: number): void {
    this.empDetailsService.deleteSocialInfo(index);
  }
  onAddSkill(): void {
    this.empDetailsService.addskill();
  }
  onDeleteSkill(index: number): void {
    this.empDetailsService.deleteSkill(index);
  }
  onGetSkill(index: number): void {
    return this.empDetailsService.getSkill(index);
  }
  onStoreNewSkill(index: number) {
    return this.empDetailsService.storeNewSkill(index);
  }
}

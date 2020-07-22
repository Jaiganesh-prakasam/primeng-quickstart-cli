import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IWizardModule } from '../library/i-wizard/i-wizard.module';
import { ControlMessagesModule } from '../library/control-messages/control-messages.module';
import { EmpDetailsComponent } from './emp-details.component';
import { EmpGeneralComponent } from './emp-general/emp-general.component';
import { EmpContactComponent } from './emp-contact/emp-contact.component';
import { EmpSkillComponent } from './emp-skill/emp-skill.component';
import { EmpExperienceComponent } from './emp-experience/emp-experience.component';

const routes: Routes = [
  {
    path: '',
    component: EmpDetailsComponent
  }
];


@NgModule({
  declarations: [
    EmpDetailsComponent,
    EmpGeneralComponent,
    EmpContactComponent,
    EmpSkillComponent,
    EmpExperienceComponent
  ],
  imports: [
    IWizardModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ControlMessagesModule
  ]
})
export class EmpDetailsModule { }

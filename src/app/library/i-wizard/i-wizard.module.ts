import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWizardComponent } from './i-wizard.component';
import { IWizardStepsComponent } from './i-wizard-steps/i-wizard-steps.component';



@NgModule({
  declarations: [IWizardComponent, IWizardStepsComponent],
  imports: [
    CommonModule
  ],
  exports: [IWizardComponent, IWizardStepsComponent]
})
export class IWizardModule { }

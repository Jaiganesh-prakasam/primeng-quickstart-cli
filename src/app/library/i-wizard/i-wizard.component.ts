import { Component, OnInit, Input, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { IWizardStepsComponent } from './i-wizard-steps/i-wizard-steps.component';
import { IWizardService } from './i-wizard.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-wizard',
  templateUrl: './i-wizard.component.html',
  styleUrls: ['./i-wizard.component.scss'],
  providers: [IWizardService]
})
export class IWizardComponent implements OnInit, AfterViewInit {
  @Input() selectedStep: string;
  @Input() tabData: any[];
  constructor(public iWizardService: IWizardService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.wizardNavSelector(this.selectedStep);
  }
  wizardNavSelector(selectedStep: string): void {
    this.selectedStep = selectedStep;
    let buttonSelected = false;
    for ( const i of this.tabData) {
      const contentElement = document.getElementById(i.id);
      const navElement = document.getElementById( this.iWizardService.uuid + '-nav-' + i.id);
      const buttonElement = document.getElementById(this.iWizardService.uuid + '-button-' + i.id);
      if (i.id === selectedStep) {
        contentElement.style.display = 'block';
        buttonElement.style.display = 'block';
        navElement.classList.remove('actual-dot-incomplete');
        navElement.classList.add('actual-dot-complete');
        navElement.scrollIntoView();
        buttonSelected = true;
        continue;
      } else {
        contentElement.style.display = 'none';
        buttonElement.style.display = 'none';
      }
      if (buttonSelected) {
        navElement.classList.remove('actual-dot-complete');
        navElement.classList.add('actual-dot-incomplete');
      } else {
        navElement.classList.remove('actual-dot-incomplete');
        navElement.classList.add('actual-dot-complete');
      }
    }
    document.getElementById(this.iWizardService.uuid + '-top-navigation-span').scrollIntoView();
  }
  otherStepValidityChecker(toStepId: string): void {
    const currentPageIndex = this.tabData.findIndex((data) => data.id === this.selectedStep);
    const toPageIndex = this.tabData.findIndex((data) => data.id === toStepId);
    // to navigate to some previous page or to the immediate next page
    if (currentPageIndex > toPageIndex || (currentPageIndex + 1 === toPageIndex)) {
      this.wizardNavSelector(toStepId);
    }
    // to navigate to some other page
    else if (currentPageIndex < toPageIndex) {
      let totalStepsCount = 0;
      let validStepsCount = 0;
      //  all the step in between should be valid
      for ( let i = currentPageIndex + 1; i < toPageIndex; i++) {
        totalStepsCount ++;
        const validityArray = this.tabData[i].formValidation;
        const checkValidity = validityArray
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
        if (checkValidity.length === validityArray.length) {
          validStepsCount ++;
        }
      }
      // navigate to selected step if all the pages in between are valid
      if (totalStepsCount === validStepsCount) {
        this.wizardNavSelector(toStepId);
      }
    }
  }
  currentStepValidityChecker(toStepId: string): void {
    const element = this.tabData.filter((data) => data.id === this.selectedStep);
    const validityArray = element[0].formValidation;
    // to return true as default when no validation needed
    if (!validityArray) {
      this.wizardNavSelector(toStepId);
    } else {
      const checkValidity = validityArray
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
      if (checkValidity.length === validityArray.length) {
        this.otherStepValidityChecker(toStepId);
      }
    }
  }

  nextWizard(selectedStep: string): void {
    const index = this.tabData.findIndex((x) => x.id === selectedStep);
    this.wizardNavSelector(this.tabData[index + 1].id);
  }
  previousWizard(selectedStep: string): void {
    const index = this.tabData.findIndex((x) => x.id === selectedStep);
    this.wizardNavSelector(this.tabData[index - 1].id);
  }
}

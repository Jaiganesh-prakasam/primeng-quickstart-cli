import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'i-wizard-steps',
  templateUrl: './i-wizard-steps.component.html',
  styleUrls: ['./i-wizard-steps.component.scss']
})
export class IWizardStepsComponent implements OnInit, AfterViewInit {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() stepName: string;
  @Input() validity: Array<any>;
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  previousPage() {
    this.previous.emit();
  }
  nextPage() {
    this.next.emit();
  }

  validityChecker() {
    // to return true as default when no validation needed
    if (!this.validity) {
      return false;
    } else {
      const checkValidity = this.validity
        .filter((formGroupOrControlOrArray) => formGroupOrControlOrArray.valid);
      if (checkValidity.length !== this.validity.length) {
        return true;
      } else {
        return false;
      }
    }
  }

}

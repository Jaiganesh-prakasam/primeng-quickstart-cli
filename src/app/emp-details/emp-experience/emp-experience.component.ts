import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service';
import { FormGroup, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-emp-experience',
  templateUrl: './emp-experience.component.html',
  styleUrls: ['./emp-experience.component.scss']
})
// Work Experience Info
// --------------------
// work experiences:
//   - Allow user to add Experience details
//   - Details must include , company name, location(city,country),
//   company url, your role, date (from, to), experience(calculate from  date filed)
// type Array -
//   validation
//     - Required all field
//     - proper validation
//     - date  validation ( format month/date/year)
//     - company_url  - valid format
//     - Role field must be an auto complete search
//       if role not exist in list we have to add that skill into list
//     - company name - Min -3  Max-25 Char, Alphabets only
export class EmpExperienceComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() experienceFormArray: FormArray;
  @Output() addExperience = new EventEmitter();
  @Output() deleteExperience = new EventEmitter();
  @Output() getRole = new EventEmitter();
  @Output() storeNewRole = new EventEmitter();
  constructor(
    public empDetailsService: EmpDetailsService
  ) {

  }

  ngOnInit(): void {
  }

  experienceCalculation(from , to) {
    if (from && to) {
      from = moment(from);
      to = moment(to);
      const years = to.diff(from , 'years');
      from.add(years, 'years');

      const months = to.diff(from , 'months');
      from.add(months, 'months');

      const days = to.diff(from , 'days');
      return years + ' Y ' + months + ' M ' + days + ' D ';
    } else {
      return 'select from and to date';
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { EmpDetailsService } from '../emp-details.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-emp-general',
  templateUrl: './emp-general.component.html',
  styleUrls: ['./emp-general.component.scss']
})
// General Info
// ------------
// FirstName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// LastName:
//   type string;
//   Validation
//     Required, Min -3  Max-15 Char, Alphabets only
// Full name:
//   type string;
//   -  non editable
//   -  append value from fname and lastname
// dob:
//   type string
//   Validation
//     Required, must be a valid date( >18, <80);
// age:
//   - find age by  dob;
export class EmpGeneralComponent implements OnInit {
  @Input() form: FormGroup;
  constructor(
    public empDetailsService: EmpDetailsService
  ) { }

  ngOnInit(): void {
  }
  ageCalculation(date: string): number {
    if (date) {
      const dob = new Date(date);
      const diffMs = Date.now() - dob.getTime();
      const  ageDt = new Date(diffMs);
      return Math.abs(ageDt.getUTCFullYear() - 1970);
    }
  }

}

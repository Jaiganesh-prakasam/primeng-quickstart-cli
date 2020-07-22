import { Component, OnInit } from '@angular/core';
import { EmployeeFetchDetailsService } from '../fetchServices/employee-fetch-details.service';
import { EmpDetails } from '../sharedInterface/emp-details';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees: EmpDetails[];
  employeesSettings = {
    fieldDefinition: [
      {
        heading: 'id',
        type: 'string',
        contentArray: [['id']]
      },
      {
        heading: 'First name',
        type: 'string',
        contentArray: [['empGeneral', 'firstName']]
      },
      {
        heading: 'Last name',
        type: 'string',
        contentArray: [['empGeneral', 'lastName']]
      },
      {
        heading:  'D.O.B',
        type: 'date',
        contentArray: [['empGeneral', 'dob']]
      }
    ]
  };
  constructor(
    private employeeFetchDetailsService: EmployeeFetchDetailsService,
    private router: Router) {
      this.fetchEmployee();
  }

  ngOnInit(): void {
  }
  fetchEmployee(): void {
    this.employeeFetchDetailsService.getEmployees()
    .subscribe(employees => {
      this.employees = employees.sort((employee1, employee2) => Number(employee1.id) - Number(employee2.id));
    });
  }
  addEmployee(): void {
    this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'add' } });
  }
  updateEmployee(id: number): void {
    this.router.navigate(['/routing/emp-details'], { queryParams: { orderType: 'update', id  } });
  }
  deleteEmployee(id): void {
    this.employeeFetchDetailsService.deleteEmployee(id).subscribe((data) => {
      this.fetchEmployee();
    });
  }

}

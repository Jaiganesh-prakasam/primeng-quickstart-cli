import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { EmpListComponent } from './emp-list.component';
const routes: Routes = [
  {
    path: '',
    component: EmpListComponent
  }
];
@NgModule({
  declarations: [EmpListComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes),
  ]
})
export class EmpListModule { }

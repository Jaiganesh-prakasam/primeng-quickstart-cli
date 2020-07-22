import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationService } from './sharedServices/validation.service';
const routes: Routes = [
  { path: '', redirectTo: 'emp-list', pathMatch: 'full' },
  {
    path: 'emp-list',
    loadChildren: () =>
    import('./emp-list/emp-list.module').then(
      (m: any) => m.EmpListModule
    )
  },
  {
    path: 'emp-details',
    loadChildren:  () =>
    import('./emp-details/emp-details.module').then(
      (m: any) => m.EmpDetailsModule
    )
  },
  { path: '**', redirectTo: 'emp-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ValidationService]
})
export class AppRoutingModule { }

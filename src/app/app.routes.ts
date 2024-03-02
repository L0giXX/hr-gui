import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/components/employees/employees.component';
import { HomeComponent } from './home/components/home.component';
import { DepartmentsComponent } from './departments/components/departments/departments.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'departments', component: DepartmentsComponent },
];

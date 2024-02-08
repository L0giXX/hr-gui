import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/components/employees.component';
import { HomeComponent } from './home/components/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
];

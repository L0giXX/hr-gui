import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [SearchComponent, FilterComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent {}

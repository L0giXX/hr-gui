import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [SearchComponent, FilterComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  @ViewChild('search')
  searchComponent: SearchComponent = new SearchComponent();
  @ViewChild('filter')
  filterComponent: FilterComponent = new FilterComponent();

  searchSignal = signal('');
  filterSignal = signal('');

  constructor(private router: Router) {}

  searchEmployees() {
    this.searchSignal.set(
      this.searchComponent.getSearchInput().trim().toLowerCase()
    );
    this.filterSignal.set(
      this.filterComponent.getFilterInput().trim().toLowerCase()
    );

    if (this.searchSignal() !== '' && this.filterSignal() !== '') {
      this.router.navigate([], {
        queryParams: {
          search: this.searchSignal().replace(' ', '-'),
          department: this.filterSignal().replace(' ', '-'),
        },
      });
    } else if (this.searchSignal() === '' && this.filterSignal() !== '') {
      this.router.navigate([], {
        queryParams: {
          department: this.filterSignal().replace(' ', '-'),
        },
      });
    }

    console.log(this.searchSignal());
  }

  ngOnInit() {}
}

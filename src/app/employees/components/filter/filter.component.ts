import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @ViewChild('filterSelect')
  filterSelect: ElementRef = new ElementRef('');

  getFilterInput(): string {
    return this.filterSelect.nativeElement.value;
  }
}

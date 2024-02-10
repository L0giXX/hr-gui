import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @ViewChild('searchInput')
  searchInput: ElementRef = new ElementRef('');

  getSearchInput(): string {
    return this.searchInput.nativeElement.value;
  }
}

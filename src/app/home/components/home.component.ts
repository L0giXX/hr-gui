import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { HomeService } from '../service/home.service';
import { HomeInterface } from '../types/home.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  homeData: HomeInterface[] = [];

  constructor(private homeService: HomeService) {}

  fetchData(): void {
    this.homeService.get().subscribe((data) => {
      this.homeData = data;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}

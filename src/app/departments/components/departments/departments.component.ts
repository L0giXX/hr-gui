import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsService } from '../../service/departments.service';
import { IDepartment } from '../../types/departments.interface';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
  providers: [DepartmentsService],
})
export class DepartmentsComponent implements OnInit {
  departmentsData: IDepartment[] = [];

  constructor(private departmentsService: DepartmentsService) {}

  fetchData(): void {
    this.departmentsService.get().subscribe((data) => {
      this.departmentsData = data;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartment } from '../types/departments.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  get(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>('http://localhost:5234/api/department');
  }
}

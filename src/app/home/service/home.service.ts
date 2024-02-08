import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeInterface } from '../types/home.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  get(): Observable<HomeInterface[]> {
    return this.http.get<HomeInterface[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/module/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  constructor() { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
  }
}

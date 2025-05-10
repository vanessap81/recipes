import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpClient = inject(HttpClient);
  apiBaseUrl = environment.apiBaseUrl;

  public get(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/categories`)
  }
  
}

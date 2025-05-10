import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  httpClient = inject(HttpClient);
  apiBaseUrl = environment.apiBaseUrl;

  public get() {
    return this.httpClient.get(`${this.apiBaseUrl}/api/v1/recipes`);
  }

  constructor() { }
}

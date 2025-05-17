import { Component, ElementRef, inject, input, model, output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Recipe } from '../../data/recipe.model';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  elementRef = inject(ElementRef); 

  searchControl = input.required<FormControl>();
  recipes = model<Recipe[] | null>();
  goToRecipeEvent = output<string>();
  
}

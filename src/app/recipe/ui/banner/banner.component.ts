import { Component, ElementRef, HostListener, inject, input, model, OnInit, output } from '@angular/core';
import { Recipe } from '../../data/recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../data/recipe.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  elementRef = inject(ElementRef); 
  router = inject(Router);
  recipeService = inject(RecipeService);
  recipeArray: Recipe[] = [];

  OnEnterKey(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    if (event.key === 'Enter' && value.length > 2) {
      this.recipeService.search(value).subscribe((data)=> {
        this.recipeArray = data;
      });
    }
  };
  
  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent): void { 
      if (!this.elementRef.nativeElement.contains(event.target)) { 
      this.recipeArray = [];
    }   
  };
  
  goToRecipe(id: string) { 
    this.router.navigate(['/receitas', id]);
  }
}

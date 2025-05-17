import { Component, ElementRef, HostListener, inject, input, model, output } from '@angular/core';
import { Recipe } from '../../data/recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../data/recipe.service';

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
  recipes!: Recipe[] | null;

  OnEnterKey(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    if (event.key === 'Enter') {
      this.recipeService.search(value).subscribe((data)=> {
        this.recipes = data;
      });
    }
  };
  
  @HostListener('document:click', ['$event']) 
  clickOut(event: MouseEvent): void { 
      if (!this.elementRef.nativeElement.contains(event.target)) { 
      this.recipes = null; 
    }   
  };
  
  goToRecipe(id: string) { 
    this.router.navigate(['/receitas', id]);
  }
}

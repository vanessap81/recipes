import { Component, inject, input, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../data/recipe.model';
import { RecipeDetailComponent } from "../../ui/recipe-detail/recipe-detail.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-recipe',
  imports: [AsyncPipe, RecipeDetailComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  id = input<string>();
  recipeService = inject(RecipeService);
  recipe$!: Observable<Recipe>;

  ngOnInit(): void {
      const id = this.id();
      if(id)this.recipe$ = this.recipeService.getById(id);
  }
}

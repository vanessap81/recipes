import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Router } from 'express';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { Recipe } from '../../data/recipe.model';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  recipeService = inject(RecipeService);
  router = inject(Router);
  searchControl = new FormControl("", {nonNullable: true});
  filteredRecipes$!: Observable<Recipe[]>;

  ngOnInit(): void {
      this.filteredRecipes$ = this.searchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((searchTerm) => searchTerm.length > 2),
        switchMap((searchTerm) => 
          this.recipeService
            .search(searchTerm)
            .pipe(catchError(() => [])),
        )
      )
  }

  goToRecipe(id: string) {
    this.router.navigate(['/receitas', id]);
  }
}

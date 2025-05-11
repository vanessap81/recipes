import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { 
  catchError, 
  debounceTime, 
  distinctUntilChanged, 
  filter, 
  Observable, 
  switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Recipe } from '../../data/recipe.model';
import { BannerComponent } from "../../ui/banner/banner.component";

@Component({
  selector: 'app-search',
  imports: [BannerComponent, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  recipeService = inject(RecipeService);
  router = inject(Router);

  // cria uma instância de FormControl com uma string vazia como valor inicial, o valor do controle nunca será nulo
  searchControl = new FormControl("", {nonNullable: true});
  filteredRecipes$!: Observable<Recipe[]>;

  ngOnInit(): void {
      this.filteredRecipes$ = this.searchControl.valueChanges.pipe(
        debounceTime(300),
        // requisição ao servidor apenas se o valor digitado mudar:
        distinctUntilChanged(),
        filter((searchTerm) => searchTerm.length > 2),
        switchMap((searchTerm) => 
          this.recipeService
            .search(searchTerm)
            // captura o erro e retorna um array vazio:
            .pipe(catchError(() => [])),
        )
      )
  }

  goToRecipe(id: string) {
    this.router.navigate(['/receitas', id]);
  }
}

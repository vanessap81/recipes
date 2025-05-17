import { Component } from '@angular/core';
import { BannerComponent } from "../../ui/banner/banner.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { FormControl } from '@angular/forms';
import { RecipeService } from '../../data/recipe.service';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, RecipesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchControl = new FormControl('', { nonNullable: true });

  // somente para o teste de search da API
  constructor(private service: RecipeService) {
    this.service.search('ovos').subscribe((data) => {
      console.log(data);
    })
  }
}

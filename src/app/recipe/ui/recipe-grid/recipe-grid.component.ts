import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../../data/recipe.model';
import { Category } from '../../data/category.model';

@Component({
  selector: 'app-recipe-grid',
  imports: [RecipeCardComponent],
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeGridComponent {
  recipes = input<Recipe[]>();
  categories = input<Category[]>();
  clickEvent = output<string>();
}

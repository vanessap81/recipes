import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CategoryNamePipe } from '../../util/category-name.pipe';
import { Recipe } from '../../data/recipe.model';
import { Category } from '../../data/category.model';

@Component({
  selector: 'app-recipe-card',
  imports: [CategoryNamePipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {
  recipe = input<Recipe>();
  categories = input<Category[]>();
}

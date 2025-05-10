import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CategoryNamePipe } from '../../util/category-name.pipe';
import { Recipe } from '../../data/recipe.model';
import { Category } from '../../data/category.model';
import { NewRecipeBadgeDirective } from '../../util/new-recipe-badge.directive';

@Component({
  selector: 'app-recipe-card',
  imports: [CategoryNamePipe, NewRecipeBadgeDirective],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent {
  recipe = input<Recipe>();
  categories = input<Category[]>();
  clickEvent = output<string>();
}

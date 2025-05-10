import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../data/category.model';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  // transforma ids de categorias em nomes de categorias
  // recebe os ids das categorias e um array de categorias (para pesquisar os nomes) e retorna os nomes das categorias:
  transform(ids: string[], categories: Category[] | undefined): string {
    if(!categories) return " ";

    return ids
      .map((id) => categories.find((category) => category.id === id)?.name,)
      .filter((name) => name !== undefined)
      .join(', ');
  }

}

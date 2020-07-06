import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wiener_Schnitzel.jpg/260px-Wiener_Schnitzel.jpg',
      ingredients: ['French fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://makkelijkafvallen.nl/wp-content/uploads/2019/09/1024x800-recept-voor-koolhydraatarme-spaghetti-bolognese-saus_cr-500x375.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  };

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
}

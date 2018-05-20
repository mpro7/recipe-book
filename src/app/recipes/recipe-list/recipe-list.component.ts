import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Test Description',
    'https://c.pxhere.com/photos/54/0b/sandwich_meal_food_bread_lunch_ham_tomato-1373778.jpg!d')
  ];
  public recipeName: string;
  public recipeDescription: string;
  public recipeURL: string;
  public newRecipe = {} as Recipe;

  constructor() { }

  ngOnInit() {

    console.log(this.recipes);
    this.newRecipe.name = 'Next Recipe';
    this.newRecipe.description = 'New Description';
    this.newRecipe.imagePath = 'https://c.pxhere.com/images/1a/6c/93062072a86701990aa1f7d5843b-1420302.jpg!d';
    this.recipes.push(this.newRecipe);
  }

}

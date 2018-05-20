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
    'https://cdn.pixabay.com/photo/2012/06/08/16/09/heart-49576_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

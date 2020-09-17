import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe

  bindSelectedRecipe(recipeDtl){
    console.log('recipe details bind on recipe component')
    console.log(recipeDtl)
    this.selectedRecipe = recipeDtl
  }

  constructor() { }

  ngOnInit(): void {
  }

}

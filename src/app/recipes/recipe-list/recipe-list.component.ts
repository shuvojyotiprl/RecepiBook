import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = this._RecipeService.getRecipes();
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor(private _RecipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    console.log('recipeSelected event in recipe-list ');
    console.log(recipe)
    this.recipeWasSelected.emit(recipe)
    console.log('Recipe emitted')
  }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] ;

  constructor(private _ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients = this._ShoppingListService.getINgredients()
      this._ShoppingListService.ingredientsChanged.subscribe((ingredients : Ingredient[])=>{
        this.ingredients = ingredients
      })
  }

  /* onIngredientAdded(newIngredient){
    this.ingredients.push(newIngredient)
  } */

}

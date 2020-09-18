import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 10)
    ]

    getINgredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient){
        
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(li_ingredients : Ingredient[]){
        
        this.ingredients.push(...li_ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}
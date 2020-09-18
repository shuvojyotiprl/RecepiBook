import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    constructor(private _ShoppingListService:ShoppingListService){}

    recipeSelected = new EventEmitter<Recipe> ();

    private recipes: Recipe[] = [
        new Recipe('Byriani',
            'Hyderabadi Byriani ',
             'https://media.istockphoto.com/photos/indian-chicken-biryani-served-in-a-terracotta-bowl-with-yogurt-over-picture-id979891994',
             [new Ingredient('Basmati Rice',1),new Ingredient('Mutton ',4),new Ingredient('Curd',1)])
        ,
        new Recipe('Mandi',
            'Kolapuri Mandi ', 
            'https://media.istockphoto.com/photos/chicken-kabsa-homemade-arabian-rice-picture-id1207467061',
            [new Ingredient('Mandi Rice',1),new Ingredient('Chicken ',4),new Ingredient('Dry Fruits',1)])
        ,
        new Recipe('Kabab',
        'Boti Kabab', 
        'https://media.istockphoto.com/photos/grilled-vegetable-and-chicken-skewers-picture-id1133212813',
        [new Ingredient('Kabab mix',1),new Ingredient('Meat ',4)]),
        new Recipe('Tandoori Chicken','Wholw roasted chicken',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg?resize=980:*',
        [new Ingredient('Chicken',1),new Ingredient('Olive oil',1)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredientArr : Ingredient[]){
        this._ShoppingListService.addIngredients(ingredientArr)
    }
}
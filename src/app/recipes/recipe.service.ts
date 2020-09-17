import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Byriani',
            'Hyderabadi Byriani ', 'https://media.istockphoto.com/photos/indian-chicken-biryani-served-in-a-terracotta-bowl-with-yogurt-over-picture-id979891994')
        ,
        new Recipe('Mandi',
            'Kolapuri Mandi ', 'https://media.istockphoto.com/photos/chicken-kabsa-homemade-arabian-rice-picture-id1207467061')
        ,
        new Recipe('Kabab','Boti Kabab', 'https://media.istockphoto.com/photos/grilled-vegetable-and-chicken-skewers-picture-id1133212813')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
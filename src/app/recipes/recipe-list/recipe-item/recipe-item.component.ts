import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe
  //@Output() recipeSelected = new EventEmitter<void>();

  constructor(private _RecipeService:RecipeService) { }


  ngOnInit(): void {
  }

  onSelected(){
    console.log('Recipe item selected! in recipe-item')
    this._RecipeService.recipeSelected.emit(this.recipe)
    //this.recipeSelected.emit()
  }

}

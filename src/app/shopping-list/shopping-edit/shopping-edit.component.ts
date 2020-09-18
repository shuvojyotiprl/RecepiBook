import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInputRef',{static:false}) nameIpRef:ElementRef;
  @ViewChild('amountInputRef',{static:false}) amtIpRef:ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient> ();
  constructor(private _ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const igName = this.nameIpRef.nativeElement.value
    const igAmt = this.amtIpRef.nativeElement.value
    const newIngredient = new Ingredient(igName,igAmt)
    this._ShoppingListService.addIngredient(newIngredient)
   // this.ingredientAdded.emit(newIngredient)
  }
}

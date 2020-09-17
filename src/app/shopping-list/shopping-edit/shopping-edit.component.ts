import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInputRef',{static:false}) nameIpRef:ElementRef;
  @ViewChild('amountInputRef',{static:false}) amtIpRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient> ();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const igName = this.nameIpRef.nativeElement.value
    const igAmt = this.amtIpRef.nativeElement.value
    const newIngredient = new Ingredient(igName,igAmt)
    this.ingredientAdded.emit(newIngredient)
  }
}

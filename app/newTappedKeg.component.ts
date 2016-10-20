import { Component, Output, EventEmitter } from '@angular/core';
import { TappedKeg } from './tap.model';

@Component({
  selector: 'new-TappedKeg',
  template: `
    <h1>New Tapped Keg</h1>
    <div>
      <label>Enter the Name on the Keg:</label>
      <input #newName>
      <label>Enter Brand:</label>
      <input #newBrand>
      <label>Enter Price:</label>
      <input #newPrice>
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent>
      <button (click)="
        addClicked(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value);
        newName.value="";
        newBrand.value="";
        newPrice.value="";
        newAlcoholContent.value="";
      ">Add</button>
    </div>
  `
})

export class NewTapComponent {
  @Output() newTapSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholContent: number, id: number) {
    var newTapToAdd: TappedKeg = new TappedKeg(name, brand, price, alcoholContent, id);
    this.newTapSender.emit(newTapToAdd);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component ({
  selector: 'tap-list'
  template: `
  <div *ngFor="let currentTap of childTapList">
    <h3>{{ currentTap.name.brand.price.alcoholContent.id}}</h3>
    <button (click)="editButton(currentTap)">Edit</button>

  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickTap = new EventEmitter();

  editButton(tapToEdit: Tap) {
    this.clickTap.emit(tapToEdit);
  }
}

import { Component } from '@angular/core'
import { Tap } from './tap.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Tap Room App</h1>

  <tap-list
    [childTapList]="masterTapList"
  ></tap-list>
  `
})

export class AppComponent {
  public masterTapList: Tap[] = [
    new Tap(),
  ];

}

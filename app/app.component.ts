import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Tap Room App</h1>
    <div class="row">
      <div class="col-sm-6">
        <new-TapKeg
        (newTappedKeg)="addTappedKeg($event)"
        ></new-TapKeg>
      </div>
      <div class="col-sm-6">
        <task-list
          [childKegList]="masterKegList"
          (clickSender)="showDetails($event)"
        ></task-list>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

}

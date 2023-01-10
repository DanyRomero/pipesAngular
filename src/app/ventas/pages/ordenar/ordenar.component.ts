import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  trueOrFalse: boolean = false

  toggleMayusculas(){
    this.trueOrFalse = !this.trueOrFalse
  }
}

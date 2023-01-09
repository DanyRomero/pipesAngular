import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'daniela';
  nombreUpper: string = 'DANIELA';
  nombreCompleto: string = 'daniEla ROmero';

  fecha: Date = new Date();
}

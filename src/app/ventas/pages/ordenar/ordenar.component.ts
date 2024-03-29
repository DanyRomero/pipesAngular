import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  trueOrFalse: boolean = false
  ordenarPor : string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul

    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro

    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde

    },
    {
      nombre: 'DareDavil',
      vuela: false,
      color: Color.rojo

    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde

    }

  ]

  toggleMayusculas(){
    this.trueOrFalse = !this.trueOrFalse
  }

  cambiarOrden(valor : string){
    this.ordenarPor = valor;
    console.log(valor)
  
  }
}

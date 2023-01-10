import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] =['Maria', 'Pedro', 'Juan', 'Luis', 'Hugo', 'Dan']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
    
  }

  cambiarCliente(){
    this.nombre= 'Daniela';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop()
  }



  //keyValue Pipe
  persona= {
    nombre: 'Daniela',
    edad : 32,
    direccion: 'México City, Mex'
  }

  //json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robbin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }

  ]

  //async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500)
  })
}

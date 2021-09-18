import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input('pnuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzservice: DbzService) { }

  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return; }
    
    this.dbzservice.agregarPersonaje(this.nuevo);

    this.nuevo = { nombre: '', poder: 0 };

  }


}

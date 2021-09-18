import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";



@Injectable() //con este decorador le decimos ha esta clase que se comportara como un servicio que se va ha inyectar
export class DbzService {

  private  _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];

    get personajes():Personaje[]{
        return [...this._personajes];//en JavaScript todo los Objetos son mandados por referencia por lo tanto no es muy seguro
                                     //entonces se retorna un arreglo nuevo con la ayuda del operador spread
                                     //Entonces de esta manera se rope la Referencia.
                                     //Esto es una buena practica de JavaScript
    }

    constructor() {} //Este constructor si queremos lo borramos

    agregarPersonaje(personaje:Personaje){

        this._personajes.push(personaje);

    }

}

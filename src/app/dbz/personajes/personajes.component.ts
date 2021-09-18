import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})
export class PersonajesComponent {


  get personajes(){
     return this.dbzservicio.personajes;
  }

  constructor(private dbzservicio:DbzService){}
  


}

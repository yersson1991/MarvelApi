import { CharactersApiService } from './character/shared/characters-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  // constructor;tipo;nombre_variable;componente_a_llamar
  constructor(private characterSvc: CharactersApiService) { }

  // se crea una propiedad y se leasigna el componente observable tipo any
  allCharacters: Observable<any>;



   ngOnInit(): void {
     //invocamos almetodo en nuesta Metodo ngOnInit
    this.getCharacters();
  }


  //creamos el Metodo getCharacters para poder relacionarlo con getAllCharacters y asi traer todos //characters
  getCharacters() {
  //Nota se podria decltar directamente en ngOnInit
    this.allCharacters = this.characterSvc.getAllCharacters();
  }

}

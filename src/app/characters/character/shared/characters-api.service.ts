import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  //api key ya que la app es de uso privado
  PUBLIC_KEY = 'c8a60a7272613a2655b9b640dd7ae314';
  //hash : un resumen md5 del parámetro ts, su clave privada y su clave pública por ejemplo, md5 ts + privateKey + publicKey//hay pagina para generaelos
  HASH = '8a3a9c5d37d916238c8bd9174371a291';
  //en URL_API solicitamos la app(servicio) a solicitar y en este caso autenticamos con publi_key
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  // constructor;tipo;nombre_variable;componente_a_llamar
  constructor(private http: HttpClient) { }

  // creaamos un Metodo llamado getAllCharacters lo declaramoscomo un observable tipo any
  // despues le pedimosque retorne URL_API que seria la diredccion de la api de marvel
  // finaliza con la invocacion del metodo pipe y un map que son los qe traen la data
  getAllCharacters(): Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results));
  }

}

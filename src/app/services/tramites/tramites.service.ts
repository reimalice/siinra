import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Tramite } from '../../models/tramite.model';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})

export class TramitesService {
  API_URL = 'apiLoteTitulos';
  constructor(private http: HttpClient) { }

  getTramitesNavegar(): Observable<TramiteApi>{
    return this.http.get<TramiteApi>(`${this.API_URL}/v1/tramites/navegar?pagina=0&cantidad=110`);
  }

}


export interface TramiteApi {
  tramites: Tramite[];
  mensajes: string[];
}



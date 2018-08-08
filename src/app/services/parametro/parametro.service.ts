import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Parametro } from '../../models/parametro.model';

@Injectable({
  providedIn: 'root'
})

export class ParametroService {
  API_URL = 'api1';

  constructor(private http: HttpClient) { }


  getParametros(id): Observable<Parametro[]> {
    return this.http.get<Parametro[]>(`${this.API_URL}/grupo/${id}/parametros`)
  }

  crearParametro(parametro: Parametro) {
    console.log(parametro)
    return this.http.post(`${this.API_URL}/parametros`,parametro)
  }

}



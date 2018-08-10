import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SereciService {
  API_URL = 'api';

  constructor(private httpClient: HttpClient) { }
  
  consultaPartidaNacimiento(partida) {
    return this.httpClient.post(`${this.API_URL}/consultaPartidaNacimiento`,partida);
  }
}

import { Component, OnInit } from '@angular/core';
import { TramitesService } from '../../../services/tramites/tramites.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Tramite } from '../../../models/tramite.model';

@Component({
  selector: 'app-lista-lotes',
  templateUrl: './lista-lotes.component.html',
  styleUrls: ['./lista-lotes.component.css']
})

export class ListaLotesComponent implements OnInit {

  dataSource = new UserDataSource(this.tramiteService);
  displayedColumns: string[] = ['hojaRuta','fechaInicioProceso', 'fechaFinProceso', 'descripcionEstado', 'opciones'];

  constructor(private tramiteService: TramitesService) { }

  ngOnInit() {

  }
}

export class UserDataSource extends DataSource<Tramite> {

  constructor(private tramiteService: TramitesService) {
    super();
  }
  connect(): Observable<Tramite[]> {
    return this.tramiteService.getTramitesNavegar().map(data=>{return data.tramites});
  }
  disconnect() { }
}

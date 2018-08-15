import { Component, OnInit, ViewChild } from '@angular/core';
import { LoteCertificado } from '../../../models/lote-certificado.model'
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from "@angular/router";

const ELEMENT_DATA: LoteCertificado[] = [
  { idLoteCertificado: 1, idTramite: 1, idEstado: 1, idUsuarioRegistro: 1, fecha: '28/07/2018', nombreArchivo: 'ABC', fechaRegistro: '28/07/2018' },
  { idLoteCertificado: 2, idTramite: 2, idEstado: 0, idUsuarioRegistro: 2, fecha: null, nombreArchivo: 'ABCD', fechaRegistro: '21/07/2018' },
  { idLoteCertificado: 3, idTramite: 4, idEstado: 0, idUsuarioRegistro: 4, fecha: null, nombreArchivo: 'ABCDE', fechaRegistro: '20/08/2018' },
  { idLoteCertificado: 5, idTramite: 5, idEstado: 1, idUsuarioRegistro: 3, fecha: '01/08/2018', nombreArchivo: 'ABCDEF', fechaRegistro: '18/05/2018' },
  { idLoteCertificado: 1, idTramite: 1, idEstado: 1, idUsuarioRegistro: 1, fecha: '28/07/2018', nombreArchivo: 'ABC', fechaRegistro: '28/07/2018' },
  { idLoteCertificado: 2, idTramite: 2, idEstado: 0, idUsuarioRegistro: 2, fecha: null, nombreArchivo: 'ABCD', fechaRegistro: '21/07/2018' },
  { idLoteCertificado: 3, idTramite: 4, idEstado: 0, idUsuarioRegistro: 4, fecha: null, nombreArchivo: 'ABCDE', fechaRegistro: '20/08/2018' },
  { idLoteCertificado: 5, idTramite: 5, idEstado: 1, idUsuarioRegistro: 3, fecha: '01/08/2018', nombreArchivo: 'ABCDEF', fechaRegistro: '18/05/2018' }
];

@Component({
  selector: 'app-lista-lotes',
  templateUrl: './lista-lotes.component.html',
  styleUrls: ['./lista-lotes.component.css']
})
export class ListaLotesComponent implements OnInit {

  displayedColumns: string[] = ['fechaRegistro', 'fecha', 'idEstado', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router) { 
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.dataSource.filterPredicate =
    (data, filter) => data.idEstado == Number.parseInt(filter) || filter === 'all';
  }

  applyFilter(filterValue) {

    this.dataSource.filter = filterValue;
  }
  nuevoLote(){
    this.router.navigate(['/registroLote']);

  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { DetalleLoteCertificado } from '../../../models/detalle-lote-certificado.model'
import * as moment from 'moment';

const ELEMENT_DATA: DetalleLoteCertificado[] = [
  { idDetalleLoteCertificado: 1, idLoteCertificado: 2, idPredio: '01', idEstado: 1,idUsuarioRegistro:1, numeroTituloCertificado:'0002', numeroCertificado:'0001', fechaProceso:'01/01/2018',fechaRegistro: '01/01/2018'}
];

@Component({
  selector: 'app-registro-lote',
  templateUrl: './registro-lote.component.html',
  styleUrls: ['./registro-lote.component.css']
})



export class RegistroLoteComponent implements OnInit {

  displayedColumns: string[] = ['numeroTituloCertificado', 'idEstado', 'fechaProceso', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  public now = moment().format('DD/MM/YYYY');
  estado: string = 'pendiente'
  constructor() {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

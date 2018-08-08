import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../../services/parametro/parametro.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { Parametro } from '../../../models/parametro.model';
import { GrupoParametro } from '../../../models/grupo-parametro.model';
import { MatDialog } from '@angular/material';
import { DialogNuevoParametroComponent } from '../dialog-nuevo-parametro/dialog-nuevo-parametro.component'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  grupoInicial = 0;
  grupos: GrupoParametro[] = [
    {
      id: 0,
      nombre: 'Grupo 0'
    },
    {
      id: 1,
      nombre: 'Grupo 1'
    },
    {
      id: 2,
      nombre: 'Grupo 2'
    },
    {
      id: 3,
      nombre: 'Grupo 3'
    },
  ];
  dataSource = new ParametroDataSource(this.parametroService, this.grupoInicial);
  displayedColumns = ['nombre', 'grupo', 'acciones'];
  constructor(private parametroService: ParametroService, public dialog: MatDialog) {
  }
  lista(valor: number) {
    this.dataSource = new ParametroDataSource(this.parametroService, valor);
    this.displayedColumns = ['nombre', 'grupo', 'acciones'];
    console.log(valor)
  }
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNuevoParametroComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
export class ParametroDataSource extends DataSource<any> {
  constructor(private parametroService: ParametroService, private numero: number) {
    super();
  }
  connect(): Observable<Parametro[]> {
    return this.parametroService.getParametros(this.numero);
  }
  disconnect() { }
}

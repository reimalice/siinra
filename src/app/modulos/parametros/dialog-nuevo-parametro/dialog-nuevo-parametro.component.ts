import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Parametro } from '../../../models/parametro.model';


@Component({
  selector: 'app-dialog-nuevo-parametro',
  templateUrl: './dialog-nuevo-parametro.component.html',
  styleUrls: ['./dialog-nuevo-parametro.component.css']
})
export class DialogNuevoParametroComponent implements OnInit {

  public nuevoParametro: Parametro = {
    id:null,
    idGrupo:null,
    nombre:null
  }
  constructor() { }

  ngOnInit() {
  }

}

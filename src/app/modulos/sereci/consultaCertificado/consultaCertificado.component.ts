import { Component } from '@angular/core';
import { SereciService } from '../../../services/sereci/sereci.service';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material";
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
@Component({
  selector: 'app-consultaCertificado',
  templateUrl: './consultaCertificado.component.html',
  styleUrls: ['./consultaCertificado.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-SP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})

export class consultaCertificadoComponent {
  frmRegistro: FormGroup
  mensaje: string
  codigoResultado: number
  public active: boolean;

  constructor(private ApiService: SereciService, private fb: FormBuilder, private dialog: MatDialog) {
    this.frmRegistro = this.fb.group({
      numeroOficialia: ['', Validators.required],
      numeroLibro: ['', Validators.required],
      numeroPartida: ['', Validators.required],
      fechaInscripcion: ['', Validators.required],
      numeroDocumentoNacido: [''],
      complementoNacido: [''],
      nombresNacido: ['', Validators.required],
      primerApellidoNacido: ['', Validators.required],
      segundoApellidoNacido: ['', Validators.required],
      fechaNacimientoNacido: ['', Validators.required],
    })
  }
  openDialog() {

    const dialogRef = this.dialog.open(CourseDialogComponent, {
      width: '550px',
      data: { mensaje: this.mensaje, codigoResultado: this.codigoResultado }
    });


  }

  consultaPartida() {
    this.active = true

    var consulta = {
      pUsuarioInstitucional: "eduardo.gutierrez",
      pContraseniaInstitucional: "Oep_4292947",
      pSiglaEntidad: "INRA",
      pNumeroDocumentoUsuario: "3458811",
      pComplementoDocumentoUsuario: "",
      pTipoDocumentoUsuario: "CI",
      pNumeroOficialia: this.frmRegistro.value.numeroOficialia,
      pNumeroLibro: this.frmRegistro.value.numeroLibro,
      pNumeroPartida: this.frmRegistro.value.numeroPartida,
      pFechaInscripcion: moment(this.frmRegistro.value.fechaInscripcion).format("DD/MM/YYYY"),
      pNumeroDocumentoNacido: this.frmRegistro.value.numeroDocumentoNacido,
      pComplementoNacido: this.frmRegistro.value.complementoNacido,
      pNombresNacido: this.frmRegistro.value.nombresNacido,
      pPrimerApellidoNacido: this.frmRegistro.value.primerApellidoNacido,
      pSegundoApellidoNacido: this.frmRegistro.value.segundoApellidoNacido,
      pFechaNacimientoNacido: moment(this.frmRegistro.value.fechaNacimientoNacido).format("DD/MM/YYYY")
    };
    this.ApiService.consultaPartidaNacimiento(consulta).subscribe(resultado => {
      //console.log(resultado)
      this.mensaje = resultado["notificacion"]
      this.codigoResultado = resultado["codigoResultado"]
      //console.log(this.codigoResultado)
      this.openDialog();
      this.active = false;
    }, );



  };
}

import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ModulosRoutes } from './modulos.routing';

import { ListaLotesComponent } from './lote-planos/lista-lotes/lista-lotes.component';
import { ListaComponent } from './parametros/lista/lista.component';
import { consultaCertificadoComponent } from './sereci/consultaCertificado/consultaCertificado.component';
import { CourseDialogComponent } from './sereci/course-dialog/course-dialog.component';
import { DialogNuevoParametroComponent } from './parametros/dialog-nuevo-parametro/dialog-nuevo-parametro.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModulosRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,

  ],
  declarations: [
    consultaCertificadoComponent,
    CourseDialogComponent,
    DialogNuevoParametroComponent,
    ListaComponent,
    ListaLotesComponent
  ],
  entryComponents: [
    CourseDialogComponent,
    DialogNuevoParametroComponent
  ]
})
export class ModulosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLotesComponent } from './lista-lotes/lista-lotes.component';
import { RegistroLoteComponent } from './registro-lote/registro-lote.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaLotesComponent, RegistroLoteComponent]
})
export class LotePlanosModule { }

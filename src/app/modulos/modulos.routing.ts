import { Routes } from '@angular/router';

import { consultaCertificadoComponent } from './sereci/consultaCertificado/consultaCertificado.component'
import { ListaComponent } from './parametros/lista/lista.component';
import { ListaLotesComponent } from './lote-planos/lista-lotes/lista-lotes.component'

export const ModulosRoutes: Routes = [

    {
        path: 'consultaCertificado',
        component: consultaCertificadoComponent
    },
    {
        path: 'listaParametros',
        component: ListaComponent
    },
    {
        path: 'listaLotes',
        component: ListaLotesComponent
    },

];

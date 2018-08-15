import { Routes } from '@angular/router';

import { consultaCertificadoComponent } from './sereci/consultaCertificado/consultaCertificado.component'
import { ListaComponent } from './parametros/lista/lista.component';
import { ListaLotesComponent } from './lote-planos/lista-lotes/lista-lotes.component'
import { RegistroLoteComponent} from './lote-planos/registro-lote/registro-lote.component'

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
    {
        path: 'registroLote',
        component: RegistroLoteComponent
    }

];

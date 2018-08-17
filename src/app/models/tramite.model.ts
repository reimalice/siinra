export class Tramite {
        idTramite: number;
        numeroTramite: string;
        hojaRuta: string;
        numeroGuia: string;
        fechaInicioProceso: string;
        fechaFinProceso: string;
        idEstadoTramite: number;
        descripcionEstado: string;
        solicitante: string;
        observacion: string;
        opciones:[{
                ruta : string;
                descripcion: string;
        }];
}
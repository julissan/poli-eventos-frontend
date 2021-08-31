export interface EventoInterface{
    idEvento: string;
    nombreEvento: string;
    fechaInicio: string;
    fechaFin: string;
    year: string;
    fueRealizado: boolean;
    motivoDeNoRealizacion: string;
    encuestaEvento: string;
    resultadosEncuesta: string;
    idPrograma: string | null;
    idEscuela: string | null;
    idOrganoInstitucional: string;
    idOrganizadorEvento: string;
}
export interface EventoInterface{
    idEvento: string;
    nombreEvento: string;
    fechaInicio: string;
    fechaFin: string;
    year: string;
    fueRealizado: boolean;
    motivoDeNoRealizacion: string | null;
    encuestaEvento: string | null;
    resultadosEncuesta: string | null;
    idPrograma: string | null;
    idEscuela: string | null;
    idOrganoInstitucional: string;
    idOrganizadorEvento: string;
}
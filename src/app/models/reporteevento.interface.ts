export interface ReporteEventoInterface{
    Nombre: string;
    FechaDeInicio: string;
    FechaDeFin: string;
    FueRealizado: boolean;
    MotivoDeNoRealizacion: string | null;
    EncuestaEvento: string | null;
    ResultadosEncuesta: string | null;
    NumeroDeRegistrados: string | null;
    OrganoInstitucional: string;
    Escuela: string | null;
    Programa: string | null;
    CreadoPor: string;
}
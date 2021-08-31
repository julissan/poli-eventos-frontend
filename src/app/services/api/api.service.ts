import { Injectable } from '@angular/core';

import { LoginInterface } from '../../models/login.interface';
import { ResponseLoginInterface } from '../../models/responselogin.interface';
import { ResponseInterface } from '../../models/response.interface';
import { EventoInterface } from '../../models/evento.interface'
import { ReporteEventoInterface } from '../../models/reporteevento.interface';
import { InvitadoInterface } from '../../models/invitado.interface';
import { UbicacionInterface } from '../../models/ubicacion.interface';
import { RegistroInterface } from '../../models/registro.interface';
import { InteresadoInterface } from '../../models/interesado.interface';
import { InteresadoeventoInterface } from '../../models/interesadoevento.interface'
import { InvitadoeventoInterface } from '../../models/invitadoevento.interface';
import { UbicacioneventoInterface } from '../../models/ubicacionevento.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://afternoon-thicket-13249.herokuapp.com/https://poli-eventos-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

// Login
  onLogin(form: LoginInterface):Observable<ResponseLoginInterface>{
    let direccion = this.url + "organizadordirectivo/login/"
    return this.http.post<ResponseLoginInterface>(direccion, form);
  }
// Evento
  getEventos():Observable<EventoInterface[]>{
    let direccion = this.url + "evento/";
    return this.http.get<EventoInterface[]>(direccion);
  }

  getEventoById(id: string):Observable<EventoInterface>{
    let direccion = this.url + "evento/" + id;
    return this.http.get<EventoInterface>(direccion);
  }

  postEvento(form: EventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "evento/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  updateEvento(id: string, form:EventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "evento/" + id;
    return this.http.put<ResponseInterface>(direccion, form);
  }

  deleteEventoById(id: string):Observable<ResponseInterface>{
    let direccion = this.url + "evento/" + id;
    return this.http.delete<ResponseInterface>(direccion);
  }

  getReporteEvento(id: string):Observable<ReporteEventoInterface>{
    let direccion = this.url + "evento/reporte/" + id;
    return this.http.get<ReporteEventoInterface>(direccion);
  }

// Invitado
  getInvitados():Observable<InvitadoInterface[]>{
    let direccion = this.url + "invitado/";
    return this.http.get<InvitadoInterface[]>(direccion);
  }
  
  // Invitados por evento
  getInvitadosPorEvento(id: string):Observable<InvitadoInterface[]>{
    let direccion = this.url + "evento/invitados/" + id;
    return this.http.get<InvitadoInterface[]>(direccion);
  }

  getInvitadoById(id: string):Observable<InvitadoInterface>{
    let direccion = this.url + "invitado/" + id;
    return this.http.get<InvitadoInterface>(direccion);
  }

  postInvitado(form: InvitadoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "invitado/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  updateInvitado(id: string, form:InvitadoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "invitado/" + id;
    return this.http.put<ResponseInterface>(direccion, form);
  }

  deleteInvitadoById(id: string):Observable<ResponseInterface>{
    let direccion = this.url + "invitado/" + id;
    return this.http.delete<ResponseInterface>(direccion);
  }

// Ubicacion
  getUbicaciones():Observable<UbicacionInterface[]>{
    let direccion = this.url + "ubicacion/";
    return this.http.get<UbicacionInterface[]>(direccion);
  }

  // Ubicaciones por evento
  getUbicacionesPorEvento(id: string):Observable<UbicacionInterface[]>{
    let direccion = this.url + "evento/ubicaciones/" + id;
    return this.http.get<UbicacionInterface[]>(direccion);
  }

  getUbicacionById(id: string):Observable<UbicacionInterface>{
    let direccion = this.url + "ubicacion/" + id;
    return this.http.get<UbicacionInterface>(direccion);
  }

  postUbicacion(form: UbicacionInterface):Observable<ResponseInterface>{
    let direccion = this.url + "ubicacion/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  updateUbicacion(id: string, form:UbicacionInterface):Observable<ResponseInterface>{
    let direccion = this.url + "ubicacion/" + id;
    return this.http.put<ResponseInterface>(direccion, form);
  }

  deleteUbicacionById(id: string):Observable<ResponseInterface>{
    let direccion = this.url + "ubicacion/" + id;
    return this.http.delete<ResponseInterface>(direccion);
  }

// Interesado
  getInteresados():Observable<InteresadoInterface[]>{
    let direccion = this.url + "interesado/";
    return this.http.get<InteresadoInterface[]>(direccion);
  }

  getInteresadoById(id: string):Observable<InteresadoInterface>{
    let direccion = this.url + "interesado/" + id;
    return this.http.get<InteresadoInterface>(direccion);
  }

  postInteresado(form: InteresadoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "interesado/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

// Registros
  getRegistros(id: string):Observable<RegistroInterface[]>{
    let direccion = this.url + "evento/registros/" + id;
    return this.http.get<RegistroInterface[]>(direccion);
  }

  getRegistroById(id: string):Observable<RegistroInterface>{
    let direccion = this.url + "registro/" + id;
    return this.http.get<RegistroInterface>(direccion);
  }

  postRegistro(form: RegistroInterface):Observable<ResponseInterface>{
    let direccion = this.url + "registro/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  updateRegistro(id: string, form:RegistroInterface):Observable<ResponseInterface>{
    let direccion = this.url + "registro/" + id;
    return this.http.put<ResponseInterface>(direccion, form);
  }

  deleteRegistroById(id: string):Observable<ResponseInterface>{
    let direccion = this.url + "registro/" + id;
    return this.http.delete<ResponseInterface>(direccion);
  }

//Interesado-Evento
  postInteresadoevento(form: InteresadoeventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "interesadoevento/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  buscarInteresadoevento(form: InteresadoeventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "interesadoevento/buscar/";
    return this.http.post<ResponseInterface>(direccion, form);
  }
//Ubicacion-Evento
  postUbicacionevento(form: UbicacioneventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "ubicacionevento/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  buscarUbicacionevento(form: UbicacioneventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "ubicacionevento/buscar/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

//Invitado-Evento
  postInvitadoevento(form: InvitadoeventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "invitadoevento/";
    return this.http.post<ResponseInterface>(direccion, form);
  }

  buscarInvitadoevento(form: InvitadoeventoInterface):Observable<ResponseInterface>{
    let direccion = this.url + "invitadoevento/buscar/";
    return this.http.post<ResponseInterface>(direccion, form);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { VereventosComponent } from './components/vereventos/vereventos.component';
import { InscripcioneventoComponent } from './components/inscripcionevento/inscripcionevento.component';

import { SeleccionarrolComponent } from './components/seleccionarrol/seleccionarrol.component';
import { HomeorganizadorComponent } from './components/homeorganizador/homeorganizador.component';

import { CreareventoComponent } from './components/crearevento/crearevento.component';
import { VereventosorgComponent } from './components/vereventosorg/vereventosorg.component';
import { OpcioneseventoComponent } from './components/opcionesevento/opcionesevento.component';
import { EditareventoComponent } from './components/editarevento/editarevento.component';

import { OpcionesregistroComponent } from './components/opcionesregistro/opcionesregistro.component';
import { AgregarregistroComponent } from './components/agregarregistro/agregarregistro.component';
import { VerregistrosComponent } from './components/verregistros/verregistros.component';
import { EditarregistroComponent } from './components/editarregistro/editarregistro.component';

import { OpcionesinvitadoComponent } from './components/opcionesinvitado/opcionesinvitado.component';
import { CrearinvitadoComponent } from './components/crearinvitado/crearinvitado.component';
import { AgregarinvitadoComponent } from './components/agregarinvitado/agregarinvitado.component';
import { VerinvitadosComponent } from './components/verinvitados/verinvitados.component';
import { VerinvitadosporeventoComponent } from './components/verinvitadosporevento/verinvitadosporevento.component';
import { EditarinvitadoComponent } from './components/editarinvitado/editarinvitado.component';

import { OpcionesubicacionComponent } from './components/opcionesubicacion/opcionesubicacion.component';
import { CrearubicacionComponent } from './components/crearubicacion/crearubicacion.component';
import { AgregarubicacionComponent } from './components/agregarubicacion/agregarubicacion.component';
import { VerubicacionesComponent } from './components/verubicaciones/verubicaciones.component';
import { VerubicacionesporeventoComponent } from './components/verubicacionesporevento/verubicacionesporevento.component';
import { EditarubicacionComponent } from './components/editarubicacion/editarubicacion.component';


import { ReporteeventoComponent } from './components/reporteevento/reporteevento.component';

import { HomedirectivoComponent } from './components/homedirectivo/homedirectivo.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},

  {path:'ver-eventos', component:VereventosComponent}, //invitado
  {path:'inscripcion-evento', component:InscripcioneventoComponent}, //invitado

  {path:'rol', component:SeleccionarrolComponent}, //post login si tiene ambos roles
  {path:'home-organizador', component:HomeorganizadorComponent}, //home organizador

  {path:'crear-evento', component:CreareventoComponent}, //crear evento organizador
  {path:'ver-eventos-org', component:VereventosorgComponent}, //ver evento organizador
  {path:'opciones-evento/:id', component:OpcioneseventoComponent}, //opciones evento organizador
  {path:'editar-evento/:id', component:EditareventoComponent}, //editar/borrar evento organizador

  {path:'opciones-registro/:id', component:OpcionesregistroComponent}, //opciones registro organizador
  {path:'agregar-registro/:id', component:AgregarregistroComponent}, //agregar registro organizador
  {path:'ver-registros/:id', component:VerregistrosComponent}, //ver registros por evento organizador
  {path:'editar-registro/:id', component:EditarregistroComponent}, //editar/borrar registro organizador

  {path:'crear-invitado', component:CrearinvitadoComponent}, //crear invitado organizador
  {path:'opciones-invitado/:id', component:OpcionesinvitadoComponent}, //opciones invitado organizador
  {path:'agregar-invitado/:id', component:AgregarinvitadoComponent}, //agregar invitado organizador
  {path:'ver-invitados/', component:VerinvitadosComponent}, //ver invitados
  {path:'ver-invitados-evento/:id', component:VerinvitadosporeventoComponent}, //ver invitados por evento organizador
  {path:'editar-invitado/:id', component:EditarinvitadoComponent}, //editar/borrar invitado organizador

  {path:'crear-ubicacion', component:CrearubicacionComponent}, //crear ubicacion organizador
  {path:'opciones-ubicacion/:id', component:OpcionesubicacionComponent}, //opciones ubicacion organizador
  {path:'agregar-ubicacion/:id', component:AgregarubicacionComponent}, //agregar ubicacion organizador
  {path:'ver-ubicaciones/', component:VerubicacionesComponent}, //ver ubicaciones
  {path:'ver-ubicaciones-evento/:id', component:VerubicacionesporeventoComponent}, //ver ubicaciones por evento organizador
  {path:'editar-ubicacion/:id', component:EditarubicacionComponent}, //editar/borrar ubicacion organizador

  {path:'reporte-evento/:id', component:ReporteeventoComponent}, //generar reporte organizador
  {path:'home-directivo', component:HomedirectivoComponent} //home directivo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  VereventosComponent,
  InscripcioneventoComponent,

  SeleccionarrolComponent,
  HomeorganizadorComponent,

  CreareventoComponent,
  VereventosorgComponent,
  OpcioneseventoComponent,
  EditareventoComponent,

  OpcionesregistroComponent,
  AgregarregistroComponent,
  VerregistrosComponent,
  EditarregistroComponent,

  OpcionesinvitadoComponent,
  CrearinvitadoComponent,
  AgregarinvitadoComponent,
  VerinvitadosComponent,
  VerinvitadosporeventoComponent,
  EditarinvitadoComponent,

  OpcionesubicacionComponent,
  CrearubicacionComponent,
  AgregarubicacionComponent,
  VerubicacionesComponent,
  VerubicacionesporeventoComponent,
  EditarubicacionComponent,

  ReporteeventoComponent,
  HomedirectivoComponent
  
]
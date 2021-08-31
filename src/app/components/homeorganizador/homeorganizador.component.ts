import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeorganizador',
  templateUrl: './homeorganizador.component.html',
  styleUrls: ['./homeorganizador.component.css']
})
export class HomeorganizadorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['crear-evento']);
  }

  onClick2(){
    this.router.navigate(['ver-eventos-org']);
  }

  onClick3(){
    this.router.navigate(['opciones-invitado/']);
  }

  onClick4(){
    this.router.navigate(['opciones-ubicacion/']);
  }

  volver(){
    this.router.navigate(['rol']);
  }


}

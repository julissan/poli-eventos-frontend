import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { EventoInterface } from '../../models/evento.interface';

@Component({
  selector: 'app-vereventos',
  templateUrl: './vereventos.component.html',
  styleUrls: ['./vereventos.component.css']
})
export class VereventosComponent implements OnInit {

  eventos: EventoInterface[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getEventos().subscribe(data => {
      console.log(data);
      this.eventos = data;
    });
  }

  inscripcionEvento(id:string){
    console.log(id);
    this.router.navigate(['inscripcion-evento', id]);
  }

  volver(){
    this.router.navigate(['home']);
  }

}

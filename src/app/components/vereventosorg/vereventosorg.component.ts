import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { EventoInterface } from '../../models/evento.interface';

@Component({
  selector: 'app-vereventosorg',
  templateUrl: './vereventosorg.component.html',
  styleUrls: ['./vereventosorg.component.css']
})
export class VereventosorgComponent implements OnInit {

  eventos: EventoInterface[] = [];

  constructor(private api:ApiService, private router:Router) {}

  ngOnInit(): void {
    this.api.getEventos().subscribe(data => {
      console.log(data);
      this.eventos = data;
    });
  }

  opcionesEvento(id:string){
    console.log(id);
    this.router.navigate(['opciones-evento', id]);
  }


}

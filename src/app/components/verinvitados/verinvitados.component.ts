import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { InvitadoInterface } from '../../models/invitado.interface';

@Component({
  selector: 'app-verinvitados',
  templateUrl: './verinvitados.component.html',
  styleUrls: ['./verinvitados.component.css']
})
export class VerinvitadosComponent implements OnInit {

  invitados: InvitadoInterface[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getInvitados().subscribe(data => {
      console.log(data);
      this.invitados = data;
    });
  }

  editarInvitado(id:string){
    console.log(id);
    this.router.navigate(['editar-invitado', id]);
  }

  volver(){
    this.router.navigate(['opciones-invitado']);
  }

}

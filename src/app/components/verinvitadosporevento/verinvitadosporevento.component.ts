import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InvitadoInterface } from '../../models/invitado.interface';

@Component({
  selector: 'app-verinvitadosporevento',
  templateUrl: './verinvitadosporevento.component.html',
  styleUrls: ['./verinvitadosporevento.component.css']
})
export class VerinvitadosporeventoComponent implements OnInit {

  invitados: InvitadoInterface[] = [];

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let idEvento = this.activerouter.snapshot.paramMap.get('id');
    if(idEvento){
      this.api.getInvitadosPorEvento(idEvento).subscribe(data => {
        console.log(data);
        this.invitados = data;
      });
    }
  }

  editarInvitado(id:string){
    
  }

  volver(){
    this.router.navigate(['invitadoevento', this.activerouter.snapshot.paramMap.get('id')]);
  }
}

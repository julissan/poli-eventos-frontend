import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitadoevento',
  templateUrl: './invitadoevento.component.html',
  styleUrls: ['./invitadoevento.component.css']
})
export class InvitadoeventoComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    console.log(id);
  }

  onClick1(){
    this.router.navigate(['agregar-invitado', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick2(){
    this.router.navigate(['ver-invitados-evento', this.activerouter.snapshot.paramMap.get('id')]);
  }

  volver(){
    this.router.navigate(['opciones-evento', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

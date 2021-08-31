import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcionesinvitado',
  templateUrl: './opcionesinvitado.component.html',
  styleUrls: ['./opcionesinvitado.component.css']
})
export class OpcionesinvitadoComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['crear-invitado']);
  }

  onClick2(){
    this.router.navigate(['ver-invitados']);
  }

  volver(){
    this.router.navigate(['home-organizador']);
  }

}

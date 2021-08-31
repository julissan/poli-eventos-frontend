import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcionesregistro',
  templateUrl: './opcionesregistro.component.html',
  styleUrls: ['./opcionesregistro.component.css']
})
export class OpcionesregistroComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['agregar-registro', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick2(){
    this.router.navigate(['ver-registros', this.activerouter.snapshot.paramMap.get('id')]);
  }

  volver(){
    this.router.navigate(['opciones-evento', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

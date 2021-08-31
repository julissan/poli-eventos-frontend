import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcionesevento',
  templateUrl: './opcionesevento.component.html',
  styleUrls: ['./opcionesevento.component.css']
})
export class OpcioneseventoComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    console.log(id);
  }

  onClick1(){
    this.router.navigate(['editar-evento/', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick2(){
    this.router.navigate(['opciones-invitado/', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick3(){
    this.router.navigate(['opciones-ubicacion/', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick4(){
    this.router.navigate(['opciones-registro/', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

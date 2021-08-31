import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubicacionevento',
  templateUrl: './ubicacionevento.component.html',
  styleUrls: ['./ubicacionevento.component.css']
})
export class UbicacioneventoComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['agregar-ubicacion', this.activerouter.snapshot.paramMap.get('id')]);
  }

  onClick2(){
    this.router.navigate(['ver-ubicaciones-evento', this.activerouter.snapshot.paramMap.get('id')]);
  }

  volver(){
    this.router.navigate(['opciones-evento', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

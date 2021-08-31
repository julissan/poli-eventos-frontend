import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { UbicacionInterface } from '../../models/ubicacion.interface';

@Component({
  selector: 'app-verubicaciones',
  templateUrl: './verubicaciones.component.html',
  styleUrls: ['./verubicaciones.component.css']
})
export class VerubicacionesComponent implements OnInit {

  ubicaciones: UbicacionInterface[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getUbicaciones().subscribe(data => {
      console.log(data);
      this.ubicaciones = data;
    });
  }

  editarUbicacion(id:string){
    console.log(id);
    this.router.navigate(['editar-ubicacion', id]);
  }

  volver(){
    this.router.navigate(['opciones-ubicacion']);
  }

}

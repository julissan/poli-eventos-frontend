import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UbicacionInterface } from '../../models/ubicacion.interface';

@Component({
  selector: 'app-verubicacionesporevento',
  templateUrl: './verubicacionesporevento.component.html',
  styleUrls: ['./verubicacionesporevento.component.css']
})
export class VerubicacionesporeventoComponent implements OnInit {

  ubicaciones: UbicacionInterface[] = [];

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let idEvento = this.activerouter.snapshot.paramMap.get('id');
    if(idEvento){
      this.api.getUbicacionesPorEvento(idEvento).subscribe(data => {
        console.log(data);
        this.ubicaciones = data;
      });
    }

  }

  editarUbicacion(id:string){
    
  }

  volver(){
    this.router.navigate(['ubicacionevento', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

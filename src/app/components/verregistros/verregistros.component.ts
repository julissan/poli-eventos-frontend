import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistroInterface } from '../../models/registro.interface';

@Component({
  selector: 'app-verregistros',
  templateUrl: './verregistros.component.html',
  styleUrls: ['./verregistros.component.css']
})
export class VerregistrosComponent implements OnInit {

  registros: RegistroInterface[] = [];

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id)
    this.api.getRegistros(id).subscribe(data => {
      console.log(data);
      this.registros = data;
    });
  }

  editarRegistro(id:string){
    console.log(id);
    this.router.navigate(['editar-registro', id]);
  }

  volver(){
    this.router.navigate(['opciones-registro', this.activerouter.snapshot.paramMap.get('id')]);
  }

}

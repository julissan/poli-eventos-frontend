import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UbicacionInterface } from '../../models/ubicacion.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-agregarubicacion',
  templateUrl: './agregarubicacion.component.html',
  styleUrls: ['./agregarubicacion.component.css']
})
export class AgregarubicacionComponent implements OnInit {

  ubicaciones: UbicacionInterface[] = [];

  ValidarForm = new FormGroup({
    idUbicacion: new FormControl(''),
    idEvento: new FormControl(this.activerouter.snapshot.paramMap.get('id'))
  });

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute, private alert:AlertsService) { }

  ngOnInit(): void {
    this.api.getUbicaciones().subscribe(data => {
      console.log(data);
      this.ubicaciones = data;
    });
  }

  agregarUbicacion(id:string){
    this.ValidarForm.patchValue({idUbicacion: id});
    this.api.buscarUbicacionevento(this.ValidarForm.value).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showError(dataResponse.response, 'ERROR');
        
      }else{
        this.api.postUbicacionevento(this.ValidarForm.value).subscribe(data2=>{
          console.log(this.ValidarForm.value)
          let dataResponse2:ResponseInterface = data2;
          if(dataResponse2.status  == "200"){
            this.alert.showSuccess('Ubicación Asignada', 'OK');
          }else{
            this.alert.showError('Error al Asignar Ubicación', 'ERROR');
          }
        });
      }

    });
    
  }

  volver(){
    this.router.navigate(['ubicacionevento',this.activerouter.snapshot.paramMap.get('id')]);
  }

}

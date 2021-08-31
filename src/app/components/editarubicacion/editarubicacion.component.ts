import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { UbicacionInterface } from '../../models/ubicacion.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-editarubicacion',
  templateUrl: './editarubicacion.component.html',
  styleUrls: ['./editarubicacion.component.css']
})
export class EditarubicacionComponent implements OnInit {

  ubicacion: UbicacionInterface | undefined;
  editarForm = new FormGroup({
    nombreUbicacion: new FormControl(''),
    direccion: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id){
      this.api.getUbicacionById(id).subscribe(data =>{
        //console.log(data);
        this.ubicacion = data;
        this.editarForm.setValue({
          nombreUbicacion: this.ubicacion?.nombreUbicacion,
          direccion: this.ubicacion?.direccion
        })
        //console.log(this.editarForm.value);
      });
    }
  }

  postForm(form: UbicacionInterface){
    let id = this.activerouter.snapshot.paramMap.get('id');
    console.log(form);
    if(id){
      this.api.updateUbicacion(id, form).subscribe(data=>{
        let dataResponse:ResponseInterface = data;
        if(dataResponse.status  == "200"){
          this.alert.showSuccess('Datos Actualizados', 'OK');
        }else{
          this.alert.showError(dataResponse.response, 'ERROR');
        }
      });

    }
  }

  volver(){
    this.router.navigate(['ver-ubicaciones']);
  }

  eliminar(){
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id){
      this.api.deleteUbicacionById(id).subscribe(data=>{
        
        let dataResponse:ResponseInterface = data;
        if(dataResponse.status  == "200"){
          this.alert.showSuccess('Ubicacion Eliminada', 'OK');
          this.router.navigate(['ver-ubicaciones']);
        }else{
          this.alert.showError(dataResponse.response, 'ERROR');
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { UbicacionInterface } from '../../models/ubicacion.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-crearubicacion',
  templateUrl: './crearubicacion.component.html',
  styleUrls: ['./crearubicacion.component.css']
})
export class CrearubicacionComponent implements OnInit {

  crearForm = new FormGroup({
    nombreUbicacion: new FormControl(''),
    direccion: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form: UbicacionInterface){
    this.api.postUbicacion(form).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showSuccess('Ubicación Creada', 'OK');
      }else{
        this.alert.showError(dataResponse.response, 'ERROR');
      }

    });

  }

  volver(){
    this.router.navigate(['opciones-ubicacion']);
  }

}

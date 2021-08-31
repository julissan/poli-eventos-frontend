import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { RegistroInterface } from '../../models/registro.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-agregarregistro',
  templateUrl: './agregarregistro.component.html',
  styleUrls: ['./agregarregistro.component.css']
})
export class AgregarregistroComponent implements OnInit {

  crearForm = new FormGroup({
    imagenRegistro: new FormControl(''),
    urlRegistro: new FormControl(''),
    observacionRegistro: new FormControl(''),
    idEvento: new FormControl(this.activerouter.snapshot.paramMap.get('id'))
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form: RegistroInterface){
    this.api.postRegistro(form).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showSuccess('Registro Creado y Agregado al Evento', 'OK');
      }else{
        this.alert.showError(dataResponse.response, 'ERROR');
      }

    });

  }

  volver(){
    this.router.navigate(['opciones-registro',this.activerouter.snapshot.paramMap.get('id')]);
  }

}

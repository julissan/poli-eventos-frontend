import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { InvitadoInterface } from '../../models/invitado.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-crearinvitado',
  templateUrl: './crearinvitado.component.html',
  styleUrls: ['./crearinvitado.component.css']
})
export class CrearinvitadoComponent implements OnInit {

  crearForm = new FormGroup({
    nombreInvitado: new FormControl(''),
    correoInvitado: new FormControl(''),
    credencialesInvitado: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form: InvitadoInterface){
    this.api.postInvitado(form).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showSuccess('Invitado Creado', 'OK');
      }else{
        this.alert.showError(dataResponse.response, 'ERROR');
      }

    });

  }

  volver(){
    this.router.navigate(['opciones-invitado']);
  }

}

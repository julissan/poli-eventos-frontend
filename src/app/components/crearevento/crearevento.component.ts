import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { EventoInterface } from '../../models/evento.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.component.html',
  styleUrls: ['./crearevento.component.css']
})
export class CreareventoComponent implements OnInit {

  crearForm = new FormGroup({
    nombreEvento: new FormControl(''),
    fechaInicio: new FormControl(''),
    fechaFin: new FormControl(''),
    fueRealizado: new FormControl(''),
    motivoDeNoRealizacion: new FormControl(''),
    encuestaEvento: new FormControl(''),
    resultadosEncuesta: new FormControl(''),
    idOrganoInstitucional: new FormControl(''),
    idEscuela: new FormControl(null),
    idPrograma: new FormControl(null),
    idOrganizadorEvento: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form: EventoInterface){
    this.api.postEvento(form).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showSuccess('Evento Creado', 'OK');
      }else{
        this.alert.showError(dataResponse.response, 'ERROR');
      }

    });

  }

  volver(){
    this.router.navigate(['home-organizador']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { InteresadoInterface } from '../../models/interesado.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-inscripcionevento',
  templateUrl: './inscripcionevento.component.html',
  styleUrls: ['./inscripcionevento.component.css']
})
export class InscripcioneventoComponent implements OnInit {


  crearForm = new FormGroup({
    nombreInteresado: new FormControl(''),
    codigoInteresado: new FormControl(''),
    correoInteresado: new FormControl('')
  });

  registroForm = new FormGroup({
    idInteresado: new FormControl(''),
    idEvento: new FormControl(this.activerouter.snapshot.paramMap.get('id'))
  });
  

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
  }

  postForm(form: InteresadoInterface){
    /*this.api.postInteresado(form).subscribe(data=>{
      //Se crea el interesado
      let dataResponse:ResponseInterface = data;
      console.log(data);
      //Si se crea exitosamente o ya existía procede a asociarlo con el evento
      if(dataResponse.status  == "200" || dataResponse.response == "El interesado ya existe"){
        let interesado = this.api.getInteresadoIdByCodigo(form.idInteresado);
        console.log("idInteresado: "+interesado);
        this.registroForm.patchValue({idInteresado:interesado});
        this.api.postInteresadoevento(this.registroForm.value).subscribe(data2=>{
          let dataResponse2:ResponseInterface = data2;
          console.log(data2);
          if(dataResponse2.status  == "200"){
            this.alert.showSuccess('Registro Exitoso', 'OK');
          }else{
            this.alert.showError('Hubo un Error al Inscribir', 'ERROR');
          }
        })
        
      }else{
        this.alert.showError('Hubo un Error al Inscribir', 'ERROR');
      }

    });*/

  }

  volver(){
    this.router.navigate(['ver-eventos']);
  }

}

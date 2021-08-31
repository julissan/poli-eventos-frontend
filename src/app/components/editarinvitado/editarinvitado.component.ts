import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { InvitadoInterface } from '../../models/invitado.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-editarinvitado',
  templateUrl: './editarinvitado.component.html',
  styleUrls: ['./editarinvitado.component.css']
})
export class EditarinvitadoComponent implements OnInit {

  invitado: InvitadoInterface | undefined;
  editarForm = new FormGroup({
    nombreInvitado: new FormControl(''),
    correoInvitado: new FormControl(''),
    credencialesInvitado: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService, private alert:AlertsService) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id){
      this.api.getInvitadoById(id).subscribe(data =>{
        //console.log(data);
        this.invitado = data;
        this.editarForm.setValue({
          nombreInvitado: this.invitado?.nombreInvitado,
          correoInvitado: this.invitado?.correoInvitado,
          credencialesInvitado: this.invitado?.credencialesInvitado
        })
        //console.log(this.editarForm.value);
      });
    }
  }

  postForm(form: InvitadoInterface){
    let id = this.activerouter.snapshot.paramMap.get('id');
    console.log(form);
    if(id){
      this.api.updateInvitado(id, form).subscribe(data=>{
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
    this.router.navigate(['ver-invitados']);
  }

  eliminar(){
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id){
      this.api.deleteInvitadoById(id).subscribe(data=>{
        
        let dataResponse:ResponseInterface = data;
        if(dataResponse.status  == "200"){
          this.alert.showSuccess('Invitado Eliminado', 'OK');
          this.router.navigate(['ver-invitados']);
        }else{
          this.alert.showError(dataResponse.response, 'ERROR');
        }
      });
    }
  }

}

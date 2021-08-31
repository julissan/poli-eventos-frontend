import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InvitadoInterface } from '../../models/invitado.interface';
import { ResponseInterface } from '../../models/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-agregarinvitado',
  templateUrl: './agregarinvitado.component.html',
  styleUrls: ['./agregarinvitado.component.css']
})
export class AgregarinvitadoComponent implements OnInit {

  invitados: InvitadoInterface[] = [];

  ValidarForm = new FormGroup({
    idInvitado: new FormControl(''),
    idEvento: new FormControl(this.activerouter.snapshot.paramMap.get('id'))
  });

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute, private alert:AlertsService) { }

  ngOnInit(): void {
    this.api.getInvitados().subscribe(data => {
      console.log(data);
      this.invitados = data;
    });
  }

  agregarInvitado(id:string){
    this.ValidarForm.patchValue({idInvitado: id});
    this.api.buscarInvitadoevento(this.ValidarForm.value).subscribe(data=>{

      let dataResponse:ResponseInterface = data;
      console.log(data);
      if(dataResponse.status  == "200"){
        this.alert.showError(dataResponse.response, 'ERROR');
        
      }else{
        this.api.postInvitadoevento(this.ValidarForm.value).subscribe(data2=>{
          console.log(this.ValidarForm.value)
          let dataResponse2:ResponseInterface = data2;
          if(dataResponse2.status  == "200"){
            this.alert.showSuccess('Invitado Asignado', 'OK');
          }else{
            this.alert.showError('Error al Asignar Invitado', 'ERROR');
          }
        });
      }

    });
    
  }

  volver(){
    this.router.navigate(['invitadoevento',this.activerouter.snapshot.paramMap.get('id')]);
  }

}

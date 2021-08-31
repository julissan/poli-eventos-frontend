import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginInterface } from '../../models/login.interface';
import { ResponseLoginInterface } from '../../models/responselogin.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correoOrganizadorDirectivo: new FormControl('', Validators.required),
    contraseñaOrganizadorDirectivo: new FormControl('', Validators.required)
  })

  errorStatus: boolean = false;
  errorMsg: any = "";

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: LoginInterface){
    this.api.onLogin(form).subscribe(data => {
      let dataResponse:ResponseLoginInterface = data;
      if(dataResponse.status  == "200"){
        if(dataResponse.esOrganizador && dataResponse.esDirectivo){
          this.router.navigate(['rol']);
        }else if(dataResponse.esOrganizador){
          this.router.navigate(['home-organizador']);
        }else if(dataResponse.esDirectivo){
          this.router.navigate(['home-directivo']);
        }
      }else{
        this.errorStatus = true;
        this.errorMsg = dataResponse.response;
      }
    });
  }

}
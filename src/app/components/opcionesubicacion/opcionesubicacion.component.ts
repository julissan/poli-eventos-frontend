import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcionesubicacion',
  templateUrl: './opcionesubicacion.component.html',
  styleUrls: ['./opcionesubicacion.component.css']
})
export class OpcionesubicacionComponent implements OnInit {

  constructor(private router: Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['crear-ubicacion']);
  }

  onClick2(){
    this.router.navigate(['ver-ubicaciones']);
  }

  volver(){
    this.router.navigate(['home-organizador']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionarrol',
  templateUrl: './seleccionarrol.component.html',
  styleUrls: ['./seleccionarrol.component.css']
})
export class SeleccionarrolComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick1(){
    this.router.navigate(['home-organizador']);
  }

  onClick2(){
    this.router.navigate(['home-directivo']);
  }
}

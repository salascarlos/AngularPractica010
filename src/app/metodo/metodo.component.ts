import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.css']
})
export class MetodoComponent implements OnInit {

   puntuacion = 9;

   constructor() { }

   getPuntuacion() {
   return this.puntuacion;
   }



  ngOnInit() {
  }

}

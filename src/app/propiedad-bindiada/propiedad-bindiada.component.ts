import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedad-bindiada',
  templateUrl: './propiedad-bindiada.component.html',
  styleUrls: ['./propiedad-bindiada.component.css']
})
export class PropiedadBindiadaComponent implements OnInit {
  texto = 'Escribe algodon';

  constructor() {
     setTimeout(() => {
     this.texto = 'por favor';
     }, 3000);
  }

  ngOnInit() {
  }

}

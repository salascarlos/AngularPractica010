import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-bindiado',
  templateUrl: './evento-bindiado.component.html',
  styleUrls: ['./evento-bindiado.component.css']
})

export class EventoBindiadoComponent implements OnInit {

  texto = 'Originalmente el texto se carga así';

  constructor() { }

  modTexto() {
     this.texto = 'Al pulsar el botón el texto se muestra así';
   }

   ngOnInit() {
 }
}

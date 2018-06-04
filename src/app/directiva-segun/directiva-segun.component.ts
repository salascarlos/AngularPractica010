import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-segun',
  templateUrl: './directiva-segun.component.html',
  styleUrls: ['./directiva-segun.component.css']
})
export class DirectivaSegunComponent implements OnInit {

  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers' },
    { nombre: 'Larry Bird', equipo: 'Boston Celtics' },
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls' },
    { nombre: 'Kareem Abdul-Jabbar ', equipo: 'L.A. Lakers'}
  ]
  Ahora
  constructor() { }

  ngOnInit() {
  }

}

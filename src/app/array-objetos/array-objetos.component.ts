import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo'

@Component({
  selector: 'app-array-objetos',
  templateUrl: './array-objetos.component.html',
  styleUrls: ['./array-objetos.component.css']
})
export class ArrayObjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'Madrid' },
    { id: 2, nombre: 'Pedro', apellidos: 'Lopez', ciudad: 'Sevilla' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

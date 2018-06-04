import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-style',
  templateUrl: './directiva-style.component.html',
  styleUrls: ['./directiva-style.component.css']
})
export class DirectivaStyleComponent implements OnInit {

   puntuacion: number;
 constructor() {
 }
 ngOnInit() {
 }
 setColor() {
 return this.puntuacion >= 5 ? 'green' : 'red';
 }

}

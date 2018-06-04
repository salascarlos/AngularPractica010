import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-si',
  templateUrl: './directiva-si.component.html',
  styleUrls: ['./directiva-si.component.css']
})
export class DirectivaSiComponent implements OnInit {

 capital: string;

 constructor() {
 }
 ngOnInit() {
 }
 setResultado(){
 return this.capital === "Madrid" ? true : false;
 }

}

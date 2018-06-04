import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-para',
  templateUrl: './directiva-para.component.html',
  styleUrls: ['./directiva-para.component.css']
})
export class DirectivaParaComponent implements OnInit {

  cursos: string[];

  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS'];
  }

  ngOnInit() {
  }

}

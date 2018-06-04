import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doble-binding',
  templateUrl: './doble-binding.component.html',
  styleUrls: ['./doble-binding.component.css']
})
export class DobleBindingComponent implements OnInit {
  texto = 'Texto original al cargar';

  constructor() { }

  ngOnInit() {
  }

}

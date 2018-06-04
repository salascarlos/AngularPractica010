import { Component } from '@angular/core';

@Component({
 selector: 'app-fecha',
 templateUrl: './fecha.component.html'
 })

export class fechaComponent {
  hoy: any = new Date();
}

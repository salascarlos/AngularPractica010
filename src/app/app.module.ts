import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { fechaComponent } from './fecha/fecha.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { MetodoComponent } from './metodo/metodo.component';
import { PropiedadBindiadaComponent } from './propiedad-bindiada/propiedad-bindiada.component';
import { EventoBindiadoComponent } from './evento-bindiado/evento-bindiado.component';
import { DobleBindingComponent } from './doble-binding/doble-binding.component';
import { DirectivaSiComponent } from './directiva-si/directiva-si.component';
import { DirectivaStyleComponent } from './directiva-style/directiva-style.component';
import { DirectivaClassComponent } from './directiva-class/directiva-class.component';
import { DirectivaParaComponent } from './directiva-para/directiva-para.component';
import { ArrayObjetosComponent } from './array-objetos/array-objetos.component';
import { DirectivaSegunComponent } from './directiva-segun/directiva-segun.component';
import { MenuItemDirective } from './menu-item.directive';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    AppComponent,
    fechaComponent,
    CopyrightComponent,
    ViewmodeloComponent,
    MetodoComponent,
    PropiedadBindiadaComponent,
    EventoBindiadoComponent,
    DobleBindingComponent,
    DirectivaSiComponent,
    DirectivaStyleComponent,
    DirectivaClassComponent,
    DirectivaParaComponent,
    ArrayObjetosComponent,
    DirectivaSegunComponent,
    MenuItemDirective,
    MenuItemComponent,
    PadreComponent,
    HijoComponent
   ],
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

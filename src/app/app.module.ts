import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // Componentes
  declarations: [
    AppComponent,
  ],
  // Modulos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios y proveedores
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

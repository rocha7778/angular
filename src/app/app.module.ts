import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.componet';
import { WelcomeComponent } from './welcome/welcome.component';
import { rouiting, appRoutingProviders } from './app.routing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { HttpModule } from '@angular/http';
import { PlantillaComponent } from './plantillas/plantilla.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    WelcomeComponent,
    ContactoComponent,
    CochesComponent,
    PlantillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    rouiting,
    HttpModule
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

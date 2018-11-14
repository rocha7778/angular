import {ModuleWithProviders} from '@angular/core';
import  {Routes,RouterModule} from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.componet';
import { FrutaComponent } from './fruta/fruta.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ContactoComponent} from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillaComponent } from './plantillas/plantilla.component';

const appRoutes: Routes = [
        {path:'',component:WelcomeComponent},
        {path:'home',component:WelcomeComponent},
        {path:'empleado',component:EmpleadoComponent},
        {path:'fruta',component:FrutaComponent},
        {path:'contacto',component:ContactoComponent},
        {path:'contacto/:parametro',component:ContactoComponent},
        {path:'coche',component:CochesComponent},
        {path:'palntilla',component:PlantillaComponent},
        {path:'**',component:WelcomeComponent}
];


export const rouiting : ModuleWithProviders = RouterModule.forRoot(appRoutes);
export  const appRoutingProviders:any[] = [];




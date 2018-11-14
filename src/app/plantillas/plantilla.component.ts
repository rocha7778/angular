import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.services';

@Component({
    selector:'plantilla',
    templateUrl:'./plantilla.component.html'
})

export class PlantillaComponent{


    private title :string;
    private administrador:boolean;

    constructor(){

        this.title='Plantillas';
        this.administrador = true;
    }



}
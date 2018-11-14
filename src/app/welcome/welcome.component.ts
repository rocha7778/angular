import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.services';

@Component({
    selector:'welcome',
    templateUrl:'./welcome.component.html',
    providers :[RopaService]
})

export class WelcomeComponent{
    title = 'Welcome to my Web Page';
    mensajeBienvenida = 'this it is a fantastic web page, enjoy';
    prenda:string;
    fecha:Date;



    constructor(
    private _ropaService :RopaService

    ){
        this.prenda='';
        this.fecha = new Date();

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this._ropaService.prueba());
    }

    public addRopaToList(){
        this._ropaService.addRopa(this.prenda);
        this.prenda=null;
    }

    public getPrendas(){
        return this._ropaService.getPrendas();
    }
}

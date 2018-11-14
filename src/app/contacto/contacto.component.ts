import { Component } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

@Component({
    selector:'contactenos',
    templateUrl: './contacto.component.html'

})

export class ContactoComponent{

    title:string = 'Contactenos ';
    mensaje:string = 'Estamos felices  que nos escribas';
    parametro:string;


    constructor(

        private _route:ActivatedRoute,
        private _router:Router
    ){ }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        this._route.params.forEach( (param:Params) =>{
            this.parametro =  param['parametro'];
        });
        
    }

    public  redirigir(parametro){

    this._router.navigate(['/contacto',parametro]);

    }




}
import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({

    selector:'coches',
    templateUrl:'./coches.component.html',
    providers:[PeticionesService]
})


export class CochesComponent{

    public title:string;
    public mensaje:string;
    public coche:Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(private _peticionesSerice:PeticionesService){
        this.title='Registro coches';
        this.mensaje= 'Los mejores coches del mundo aqui en Coches plays';
        this.coche = new Coche();
        this.coches = new Array<Coche>();
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._peticionesSerice.getArticulos().subscribe(result=>{
            
            this.articulos = result;
        },error=>{

            console.log(error);
        });
    }


    onSubmit(){
        this.addCocheToCollection();
       
    }

    validateCoche(){

    }

    addCocheToCollection(){
        this.coches.push(this.coche);
        this.coche = new Coche();
    }

    getCoches(){
        return this.coches;
    }
}
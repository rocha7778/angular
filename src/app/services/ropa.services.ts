import {Injectable} from '@angular/core';

@Injectable()

export class RopaService{

    public collectionRppa :Array<string>;

    public prueba(){
        return 'Pantalones vaqueros';
    }

    constructor(){
        this.collectionRppa = new Array<string>();
    }


    public addRopa(prenda:string){
        this.collectionRppa.push(prenda);
    }

    public getPrendas(){
        return this.collectionRppa;
    }
}
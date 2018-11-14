import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable, Subject, throwError} from 'rxjs';

import { map } from 'rxjs/operators';

import { HttpClientModule } from '@angular/common/http';
import  {HttpModule} from '@angular/http';

@Injectable()
export class PeticionesService{

    private url:string;

    constructor(private _http:Http){
        this.url='https://jsonplaceholder.typicode.com/posts';
    }

    getTestFromService(){

        return 'Service Peticiones http';
    }

    getArticulos(){
        return this._http.get(this.url).pipe(map(res => res.json())); 
    }

}

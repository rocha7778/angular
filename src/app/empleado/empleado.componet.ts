import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component({
    selector:'empleado',
    templateUrl:'./empleado.component.html'

})

export class EmpleadoComponent{
    title = 'Listado empleado';
    nombre:string = 'Rocha';
    apellido:string = 'Rocha';
    edad:number = 32;
    cursos:Array<string> =['PSP','Java SOA Developer','Seguridad en Base de datos'];
    empleados:Array<Empleado> = null;
    empleado:Empleado = new Empleado();
    contratado:boolean=true;
    color:string = "red";

    constructor(){

        this.empleado.nombre=this.nombre;
        this.empleado.apellido=this.apellido;
        this.empleado.cursos = this.cursos;
        this.empleado.edad=this.edad;

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    cambiarEstado(valor:boolean){
        this.contratado=valor;

    }


    cambiarColor()
    {
        let color:Array<string>=['red','blue','yellow','green'];
        let random = Math.floor(Math.random()*4 );
        this.color=color[random];

    }
}


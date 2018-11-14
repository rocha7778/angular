
export class Coche{

    private nombre:string;
    private caballos:string;
    private color:string;

    constructor(){
        this.nombre='';
        this.caballos='';
        this.color='';

    }

    public setNombre(nombre:string){
        this.nombre=nombre;
    }

    public setCaballos(caballos:string){
        this.caballos=caballos;
    }

    public setColor(color:string){
        this.color=color;
    }

    

}
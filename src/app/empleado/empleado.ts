export class Empleado{

    public nombre:string;
    public apellido :string;
    public edad:number;
    public cursos:Array<string>;

    constructor(){

        this.nombre="";
        this.apellido="";
        this.edad=0;
        this.cursos = [];
    }


    


    setNombre(nombre:string){
        this.nombre=nombre;
    }

    setApellido(apellido:string){
        this.apellido=apellido;
    }

    setEdad(edad:number){
        this.edad=edad;
    }

    setCursos(cursos:Array<string>){
        this.cursos=cursos;
    }


}
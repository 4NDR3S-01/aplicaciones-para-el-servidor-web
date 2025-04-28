import { rejects } from "assert";
import { Console } from "console";
import { mainModule } from "process";

let saludo:string="Hola estudiantes"

console.log(saludo)

const Estudiante:Iestudiantes={
    id:1,
    nombre:"William",
    correo:"e0706254372@live.uleam.edu.ec",
    direccion:"",
}

interface Iestudiantes{
    id: number;
    nombre: string;
    correo: string;
    direccion: string;
    calificacion?: number;
}

const Estudiantes:Iestudiantes[]=[
    {
        id:1,
        nombre:"William",
        correo:"e0706254372@live.uleam.edu.ec",
        direccion:"Calle 1",
    },
    {
        id:2,
        nombre:"Estudiante2",
        correo:"estudiante2@live.uleam.edu.ec",
        direccion:"Calle 2"
    },
]





Estudiantes.push({id:3,nombre:"Estudiante3",correo:"usuario3@live.uleam.edu.ec",direccion:"Calle 3"});

Estudiantes.push(Estudiante);





function Agregar(Estudiante: Iestudiantes):void{
    Estudiantes.push(Estudiante);
}





const Estudiante4:Iestudiantes={id:4,nombre:"Estudiante4",correo:"estudiante4@live.uleam.edu.ec",direccion:"Calle 4"}
Agregar(Estudiante4)






function Agregar2(param:Iestudiantes, callback:(estudiante:Iestudiantes)=>void){
    Estudiantes.push(param);
    callback(param)
}

const Estudiante5:Iestudiantes={id:5,nombre:"Estudiante5",correo:"estudiante5@live.uleam.edu.ec",direccion:"Calle 5"}

Agregar2(Estudiante5,(param:Iestudiantes)=> console.log(param));



function Agregar3(param:Iestudiantes):Promise<Iestudiantes>{
    return new Promise((resolve)=>{
        Estudiantes.push(param);
        setTimeout(()=>{
            resolve(param)
        },
        1000
    )  
    },
    )
}




/*Agregar3(Estudiante5).then((Iestudiantes)=>
{
    console.log(Estudiante5);
})
*/

async function main() {
    try{
        await Agregar3(Estudiante)
    }
    catch(ex){

    }
    finally
    {

    }
}
main()
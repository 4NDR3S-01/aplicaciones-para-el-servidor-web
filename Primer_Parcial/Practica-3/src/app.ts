import {consult, ConsultAll, insertarUser, update, userdelete, CrearVista, eliminarTodosLosUsuarios, viewdelete} from './crud'
import {initDataB} from './database'

async function main() {
    await initDataB()
    
    // Eliminar todos los usuarios al inicio
    // await eliminarTodosLosUsuarios();
    // console.log("Todos los usuarios eliminados");
    
    const Usuario = await insertarUser("William", "ac20102003@gmail.com")
    console.log("Usuario creado:", Usuario.id)
    const vista = await CrearVista("Vista reporte de productos", Usuario.id)
    console.log("Vista creada: ", vista)
    const eliminarvista = await viewdelete(vista!.id)
    console.log("Vista eliminada: ", viewdelete)
    const user = await ConsultAll()
    console.log("Usuarios: ", user)
    const userOne = await consult(Usuario.id)
    console.log("Usuario: ", userOne)
    const userUpdate = await update(Usuario.id,"Andres", "williamcabrera20@hotmail.com")
    console.log("Usuario actualizado: ", userUpdate)
    const userDelete = await userdelete(Usuario.id)
    console.log("Usuario eliminado: ", userDelete)
}
main()
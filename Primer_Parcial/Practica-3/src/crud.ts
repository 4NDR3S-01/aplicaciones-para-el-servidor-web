import {user} from './models/user'
import { AppDataSource } from './data-source'

export const insertarUser = async(nombre:string, email: string)=>{
    const user1 = new user();
    user1.correo = email
    user1.nombre = nombre
    return await AppDataSource.manager.save(user1)
}
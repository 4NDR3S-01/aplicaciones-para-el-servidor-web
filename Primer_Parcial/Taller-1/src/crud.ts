import { User } from './models/user'
import { AppDataSource } from './data-source'
import { View } from './models/view'

export const insertarUser = async (nombre: string, email: string) => {
    const user1 = new User();
    user1.correo = email;
    user1.nombre = nombre;
    return await AppDataSource.manager.save(user1);
}

export const ConsultAll = async () => {
    return await AppDataSource.manager.find(User);
}

export const consult = async (id: number) => {
    return await AppDataSource.manager.findOne(User, { where: { id } });
}

export const update = async (id: number, nombre: string, correo: string) => {
    const user2 = await consult(id);
    if (user2) {
        user2.correo = correo;
        user2.nombre = nombre;
        return await AppDataSource.manager.save(user2);
    }
    return null;
}

export const userdelete = async (id: number) => {
    const user2 = await consult(id);
    if (user2) {
        return await AppDataSource.manager.remove(user2);
    }
    return null;
}

// Elimina todos los usuarios de la base de datos
export const eliminarTodosLosUsuarios = async () => {
    await AppDataSource.manager.clear(User);
    return true;
}

export const CrearVista = async (vista: string, userid: number) => {
    const usuario = await consult(userid);
    if (usuario) {
        const view1 = new View();
        view1.vista = vista;
        view1.user = usuario;
        return await AppDataSource.manager.save(view1);
    }
    return null;
}

export const viewdelete = async (id: number) => {
    const vista = await AppDataSource.manager.findOne(View, { where: { id } });
    if (vista) {
        return await AppDataSource.manager.remove(vista);
    }
    return null;
}
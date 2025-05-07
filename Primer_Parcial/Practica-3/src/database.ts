import {AppDataSource} from './data-source'
import 'reflect-metadata'

export const initDataB = async() => {
    try {
        AppDataSource.initialize()
        console.log ("Base de datos iniciada")  
        return AppDataSource
    } catch (error) {
        console.log("inicio fallido")
        throw(error)
    }
}
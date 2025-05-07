import {insertarUser} from './crud'
import {initDataB} from './database'

async function main() {
    await initDataB()
    const Usuario = insertarUser("William", "ac20102003@gmail.com")
    console.log(Usuario)
}
main()
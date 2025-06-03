import 'reflect-metadata';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

// Seleccionar ORM: 'typeorm' o 'sequelize'
const ORM_TYPE = process.env.ORM_TYPE ?? 'typeorm';

async function main() {
  console.log(`🔧 Usando ORM: ${ORM_TYPE.toUpperCase()}`);
  
  // Inicializar base de datos según el ORM seleccionado
  try {
    if (ORM_TYPE === 'typeorm') {
      const { initializeTypeORM } = await import('./data/typeorm/typeorm.config');
      await initializeTypeORM();
    } else if (ORM_TYPE === 'sequelize') {
      const { initializeSequelize } = await import('./data/sequelize/sequelize.config');
      await initializeSequelize();
    } else {
      throw new Error(`ORM tipo "${ORM_TYPE}" no soportado. Usa 'typeorm' o 'sequelize'`);
    }
    
    console.log('✅ Base de datos inicializada exitosamente');
  } catch (error) {
    console.error('❌ Error durante la inicialización de la base de datos:', error);
    process.exit(1);
  }

  // Crear archivo HTML básico para probar la API
  const { createIndexHTML } = await import('./utils/create-index');
  createIndexHTML();

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}

(async () => {
  main();
})();

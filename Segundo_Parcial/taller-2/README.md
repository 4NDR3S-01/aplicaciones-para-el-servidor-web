# Taller 2 - Arquitectura de Servicios con NestJS, GraphQL y TypeORM

## Descripción
API GraphQL para gestionar grabaciones, feedbacks y tipos de métrica, siguiendo arquitectura por capas y buenas prácticas de NestJS.

## Entidades
- **Grabaciones:** id, url, fecha, descripción.
- **Feedbacks:** id, comentario, calificación, grabacionId (relación).
- **TipoMetrica:** id, nombre, descripción.

## Instalación y ejecución

```bash
git clone (Enlace de mi repositorio)
cd Segundo_Parcial/taller-2
npm install
npm run start:dev
```

Accede a [http://localhost:3000/graphql](http://localhost:3000/graphql) para probar la API.

## Pruebas CRUD
Utiliza el Playground de GraphQL para probar las operaciones de cada entidad.

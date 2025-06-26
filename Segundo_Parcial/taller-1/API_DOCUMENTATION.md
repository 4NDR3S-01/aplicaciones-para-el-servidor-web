# Documentación de la API REST - NestJS con TypeORM y SQLite

## Descripción
Esta API REST está construida con NestJS, TypeORM y SQLite, implementando la arquitectura de software por capas para tres entidades: Feedbacks, Grabaciones y TipoMetrica.

## Endpoints Disponibles

### 1. Feedbacks

#### Crear un feedback
```http
POST http://localhost:3000/feedbacks
Content-Type: application/json

{
  "titulo": "Excelente aplicación",
  "descripcion": "La aplicación funciona perfectamente y es muy intuitiva",
  "calificacion": 5,
  "autor": "William Cabrera"
}
```

#### Obtener todos los feedbacks
```http
GET http://localhost:3000/feedbacks
```

#### Obtener un feedback por ID
```http
GET http://localhost:3000/feedbacks/1
```

#### Actualizar un feedback
```http
PATCH http://localhost:3000/feedbacks/1
Content-Type: application/json

{
  "calificacion": 4,
  "descripcion": "Muy buena aplicación, pero podría mejorar en algunos aspectos"
}
```

#### Eliminar un feedback
```http
DELETE http://localhost:3000/feedbacks/1
```

### 2. Grabaciones

#### Crear una grabación
```http
POST http://localhost:3000/grabaciones
Content-Type: application/json

{
  "titulo": "Entrevista con el cliente",
  "descripcion": "Grabación de la reunión inicial con el cliente para definir requerimientos",
  "archivo": "entrevista_cliente_001.mp3",
  "duracion": 1800,
  "formato": "mp3"
}
```

#### Obtener todas las grabaciones
```http
GET http://localhost:3000/grabaciones
```

#### Obtener una grabación por ID
```http
GET http://localhost:3000/grabaciones/1
```

#### Actualizar una grabación
```http
PATCH http://localhost:3000/grabaciones/1
Content-Type: application/json

{
  "titulo": "Entrevista con el cliente - Actualizada",
  "duracion": 2000
}
```

#### Eliminar una grabación
```http
DELETE http://localhost:3000/grabaciones/1
```

### 3. TipoMetrica

#### Crear un tipo de métrica
```http
POST http://localhost:3000/tipo-metrica
Content-Type: application/json

{
  "nombre": "Tiempo de respuesta",
  "descripcion": "Métrica que mide el tiempo de respuesta del sistema en milisegundos",
  "unidad": "ms",
  "activo": true
}
```

#### Obtener todos los tipos de métrica
```http
GET http://localhost:3000/tipo-metrica
```

#### Obtener un tipo de métrica por ID
```http
GET http://localhost:3000/tipo-metrica/1
```

#### Actualizar un tipo de métrica
```http
PATCH http://localhost:3000/tipo-metrica/1
Content-Type: application/json

{
  "descripcion": "Métrica actualizada que mide el tiempo de respuesta del sistema en milisegundos",
  "activo": false
}
```

#### Eliminar un tipo de métrica
```http
DELETE http://localhost:3000/tipo-metrica/1
```

## Estructura de la Base de Datos

### Tabla: feedbacks
- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `titulo` (VARCHAR(255))
- `descripcion` (TEXT)
- `calificacion` (INTEGER, DEFAULT: 0)
- `autor` (VARCHAR(100))
- `fechaCreacion` (DATETIME)
- `fechaActualizacion` (DATETIME)

### Tabla: grabaciones
- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `titulo` (VARCHAR(255))
- `descripcion` (TEXT)
- `archivo` (VARCHAR(255))
- `duracion` (INTEGER, DEFAULT: 0)
- `formato` (VARCHAR(50), DEFAULT: 'mp3')
- `fechaCreacion` (DATETIME)
- `fechaActualizacion` (DATETIME)

### Tabla: tipo_metrica
- `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)
- `nombre` (VARCHAR(100))
- `descripcion` (TEXT)
- `unidad` (VARCHAR(50))
- `activo` (BOOLEAN, DEFAULT: true)
- `fechaCreacion` (DATETIME)
- `fechaActualizacion` (DATETIME)

## Validaciones

### Feedbacks
- `titulo`: String, longitud entre 1 y 255 caracteres
- `descripcion`: String obligatorio
- `calificacion`: Número entre 0 y 5
- `autor`: String, longitud entre 1 y 100 caracteres

### Grabaciones
- `titulo`: String, longitud entre 1 y 255 caracteres
- `descripcion`: String obligatorio
- `archivo`: String, longitud entre 1 y 255 caracteres
- `duracion`: Número mayor o igual a 0
- `formato`: String opcional, longitud entre 1 y 50 caracteres

### TipoMetrica
- `nombre`: String, longitud entre 1 y 100 caracteres
- `descripcion`: String obligatorio
- `unidad`: String, longitud entre 1 y 50 caracteres
- `activo`: Boolean opcional

## Códigos de Respuesta

- `200`: Operación exitosa
- `201`: Recurso creado exitosamente
- `400`: Error de validación en los datos
- `404`: Recurso no encontrado
- `500`: Error interno del servidor

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev

# Ejecutar en modo producción
npm run start:prod

# Ejecutar tests
npm run test

# Ejecutar tests e2e
npm run test:e2e
```

## Herramientas Recomendadas para Probar la API

- **Postman**: Cliente REST completo con interfaz gráfica
- **Insomnia**: Alternativa ligera a Postman
- **cURL**: Herramienta de línea de comandos
- **Thunder Client**: Extensión de VS Code para probar APIs

## Ejemplo con cURL

```bash
# Crear un feedback
curl -X POST http://localhost:3000/feedbacks \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Feedback de prueba",
    "descripcion": "Este es un feedback de prueba",
    "calificacion": 4,
    "autor": "Usuario Test"
  }'

# Obtener todos los feedbacks
curl -X GET http://localhost:3000/feedbacks
``` 
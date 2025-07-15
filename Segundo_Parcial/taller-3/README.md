# Taller 3: CRUD en Tiempo Real con NestJS + WebSockets

## Descripción
Este proyecto implementa un CRUD en tiempo real para las entidades **calificaciones**, **parametros_ideales** y **criterios_evaluacion** usando NestJS, TypeORM (SQLite) y WebSockets. Los cambios se notifican automáticamente a todos los clientes conectados.

---

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run start:dev
```

---

## Pruebas en Tiempo Real con Postman

### 1. Importar la colección
- Abre Postman.
- Haz clic en **Importar**.
- Selecciona el archivo `postman_websocket_collection.json` que está en la raíz del proyecto.
- Se agregará la colección **NestJS WebSocket CRUD Taller 3**.

### 2. Conexión WebSocket
- Asegúrate de que el backend esté corriendo en `ws://localhost:3000`.
- Abre cualquier request de la colección y haz clic en **Connect**.

### 3. Enviar mensajes
- Selecciona el request deseado (crear, listar, actualizar, eliminar para cada entidad).
- Haz clic en **Send** para enviar el mensaje WebSocket.
- Recibirás la respuesta y, tras cada cambio, todos los clientes conectados recibirán la lista actualizada.

---

## Ejemplos de Payload

### Calificaciones
- **Crear:**
```json
{
  "event": "createCalificacione",
  "data": {
    "alumno": "Juan",
    "materia": "Matemáticas",
    "calificacion": 9.5,
    "observaciones": "Excelente"
  }
}
```
- **Actualizar:**
```json
{
  "event": "updateCalificacione",
  "data": {
    "id": 1,
    "alumno": "Juan",
    "materia": "Matemáticas",
    "calificacion": 10,
    "observaciones": "Actualizado"
  }
}
```
- **Eliminar:**
```json
{
  "event": "removeCalificacione",
  "data": 1
}
```

### Parámetros Ideales
- **Crear:**
```json
{
  "event": "createParametrosIdeale",
  "data": {
    "parametro": "Temperatura",
    "valor_ideal": 22.5,
    "unidad": "°C"
  }
}
```
- **Actualizar:**
```json
{
  "event": "updateParametrosIdeale",
  "data": {
    "id": 1,
    "parametro": "Temperatura",
    "valor_ideal": 23,
    "unidad": "°C"
  }
}
```
- **Eliminar:**
```json
{
  "event": "removeParametrosIdeale",
  "data": 1
}
```

### Criterios de Evaluación
- **Crear:**
```json
{
  "event": "createCriteriosEvaluacion",
  "data": {
    "criterio": "Participación",
    "descripcion": "Participación en clase",
    "peso": 0.2
  }
}
```
- **Actualizar:**
```json
{
  "event": "updateCriteriosEvaluacion",
  "data": {
    "id": 1,
    "criterio": "Participación",
    "descripcion": "Participación activa en clase",
    "peso": 0.25
  }
}
```
- **Eliminar:**
```json
{
  "event": "removeCriteriosEvaluacion",
  "data": 1
}
```

---

## Notas
- Cada vez que se realiza una operación de creación, actualización o eliminación, todos los clientes conectados reciben la lista actualizada de la entidad correspondiente.
- Puedes usar Insomnia o cualquier cliente WebSocket compatible si lo prefieres.
- El archivo `postman_websocket_collection.json` contiene todos los ejemplos listos para usar.

---


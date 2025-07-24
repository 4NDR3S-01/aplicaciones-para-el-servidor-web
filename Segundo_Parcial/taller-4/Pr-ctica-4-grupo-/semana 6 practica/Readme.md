

# Problema de monolitico


# Microservicio
Cada local es un especialista (Servicio)
Indenpendenecia
Escalabilidad
Resilencia

adn
altamente cohesido
propiedad de los datos
aclopamientos debil
despplieue ndependendiente

tipos de comunicaocion sincronico: asincronia

Peticion-Respuesta: REST vs gRPC

REST(HTTP/JOSN)
Como funciona: El estandar de la web.vERBOS 

El cartero Confiable : RabbitMQ

# Pasos
 npm i -g @nestjs/cli
 
se crea las carpetas micro y gate
 npm install @nestjs/config
nest g resource users     
gate como rest , micro como microservicio
En los dos modulos
 npm install class-validator class-transformer
npm i --save @nestjs/microservices
 npm install --save nats
para el micro
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats 

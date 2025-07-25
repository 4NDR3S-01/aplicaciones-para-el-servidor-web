import fs from 'fs';
import path from 'path';

export const createIndexHTML = () => {
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taller-3 N-Capas - API de Análisis de Audio</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        h1 {
            text-align: center;
            color: #ffffff;
            margin-bottom: 10px;
        }
        .subtitle {
            text-align: center;
            margin-bottom: 30px;
            font-size: 1.1em;
            color: #e0e0e0;
        }
        .api-section {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        .endpoint {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #4CAF50;
        }
        .method {
            font-weight: bold;
            color: #4CAF50;
            margin-right: 10px;
        }
        .url {
            font-family: 'Courier New', monospace;
            background: rgba(0, 0, 0, 0.3);
            padding: 5px 10px;
            border-radius: 4px;
            display: inline-block;
            margin: 5px 0;
        }
        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .tech-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }
        .features {
            list-style: none;
            padding: 0;
        }
        .features li {
            padding: 8px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .features li:before {
            content: "✅ ";
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎵 Taller-3: Arquitectura N-Capas</h1>
        <p class="subtitle">Sistema de Análisis de Audio con Múltiples ORMs</p>
        
        <div class="api-section">
            <h2>🚀 API Endpoints Disponibles</h2>
            
            <div class="endpoint">
                <span class="method">GET</span>
                <span class="url">/api/v1/grabaciones</span>
                <p>Obtener todas las grabaciones</p>
            </div>
            
            <div class="endpoint">
                <span class="method">POST</span>
                <span class="url">/api/v1/grabaciones</span>
                <p>Crear nueva grabación</p>
                <pre style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 4px; margin-top: 10px;">
{
  "nombreArchivo": "audio01.mp3",
  "rutaArchivo": "/uploads/audio01.mp3",
  "duracion": 120.5,
  "formato": "mp3",
  "fechaGrabacion": "2025-06-02T10:30:00Z",
  "tamanioArchivo": 2048000
}</pre>
            </div>
            
            <div class="endpoint">
                <span class="method">GET</span>
                <span class="url">/api/v1/grabaciones/:id</span>
                <p>Obtener grabación por ID</p>
            </div>
            
            <div class="endpoint">
                <span class="method">PUT</span>
                <span class="url">/api/v1/grabaciones/:id</span>
                <p>Actualizar grabación</p>
            </div>
            
            <div class="endpoint">
                <span class="method">DELETE</span>
                <span class="url">/api/v1/grabaciones/:id</span>
                <p>Eliminar grabación</p>
            </div>
        </div>

        <div class="api-section">
            <h2>🏗️ Arquitectura Implementada</h2>
            <ul class="features">
                <li><strong>Capa de Dominio:</strong> Entidades, DTOs, Repositorios abstractos, Casos de uso</li>
                <li><strong>Capa de Infraestructura:</strong> Implementaciones concretas de repositorios y datasources</li>
                <li><strong>Capa de Presentación:</strong> Controladores, rutas y servidor Express</li>
                <li><strong>Capa de Datos:</strong> Configuración de TypeORM y Sequelize</li>
                <li><strong>Separación de responsabilidades</strong> siguiendo Clean Architecture</li>
                <li><strong>Inversión de dependencias</strong> con Repository Pattern</li>
            </ul>
        </div>

        <div class="api-section">
            <h2>⚙️ Stack Tecnológico</h2>
            <div class="tech-stack">
                <div class="tech-item">
                    <h3>🟢 TypeScript</h3>
                    <p>Lenguaje principal</p>
                </div>
                <div class="tech-item">
                    <h3>🚀 Express.js</h3>
                    <p>Framework web</p>
                </div>
                <div class="tech-item">
                    <h3>📊 TypeORM</h3>
                    <p>ORM principal</p>
                </div>
                <div class="tech-item">
                    <h3>🔄 Sequelize</h3>
                    <p>ORM alternativo</p>
                </div>
                <div class="tech-item">
                    <h3>🐘 PostgreSQL</h3>
                    <p>Base de datos principal</p>
                </div>
                <div class="tech-item">
                    <h3>📁 SQLite</h3>
                    <p>Base de datos para Sequelize</p>
                </div>
            </div>
        </div>

        <div class="api-section">
            <h2>📋 Entidades del Dominio</h2>
            <ul class="features">
                <li><strong>TipoMetrica:</strong> Catálogo de tipos de métricas</li>
                <li><strong>Metrica:</strong> Definición de métricas individuales</li>
                <li><strong>ParametroIdeal:</strong> Valores de referencia para análisis</li>
                <li><strong>Grabacion:</strong> Archivos de audio para analizar</li>
                <li><strong>Feedback:</strong> Resultados del análisis de IA</li>
            </ul>
        </div>

        <div class="api-section">
            <h2>🔧 Cambiar ORM</h2>
            <p>Para cambiar entre ORMs, establece la variable de entorno:</p>
            <div class="url">ORM_TYPE=typeorm</div> o <div class="url">ORM_TYPE=sequelize</div>
            <p>Luego reinicia la aplicación.</p>
        </div>
    </div>
</body>
</html>`;

  const publicDir = path.join(process.cwd(), 'public');
  const indexPath = path.join(publicDir, 'index.html');

  // Crear directorio public si no existe
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Escribir el archivo HTML
  fs.writeFileSync(indexPath, htmlContent, 'utf8');
  console.log('📄 Index HTML created successfully');
};
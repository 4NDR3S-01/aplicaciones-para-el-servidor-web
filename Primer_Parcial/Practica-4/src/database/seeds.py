from src.database.connection import SessionLocal, engine, Base
from src.models.models import TipoMetrica, Metrica, Parametro, Grabacion, Feedback
from datetime import datetime
import random

def reset_database():
    """Elimina todas las tablas y las vuelve a crear para empezar desde cero."""
    print("Reiniciando la base de datos...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    print("Base de datos reiniciada correctamente")

def seed_data():
    # Primero reiniciamos la base de datos
    reset_database()
    
    db = SessionLocal()
    try:
        # Crear tipos de métrica
        tipos_metrica = [
            TipoMetrica(
                nombre=f"Tipo Métrica {i}", 
                descripcion=f"Descripción completa del tipo de métrica {i}"
            )
            for i in range(1, 6)
        ]
        db.add_all(tipos_metrica)
        db.commit()
        print("✅ Tipos de métrica creados exitosamente")
        
        # Crear métricas
        metricas = [
            Metrica(
                nombre=f"Métrica {i}",
                descripcion=f"Descripción detallada de la métrica {i}",
                tipo_metrica_id=i
            )
            for i in range(1, 6)
        ]
        db.add_all(metricas)
        db.commit()
        print("✅ Métricas creadas exitosamente")
        
        # Crear parámetros
        unidades = ["kg", "cm", "bpm", "°C", "ml"]
        parametros = [
            Parametro(
                metrica_id=i,
                nombre=f"Parámetro {i}-{j}",
                valor=round(random.uniform(10.0, 100.0), 2),
                unidad=unidades[j-1]
            )
            for i in range(1, 6)
            for j in range(1, 6)
        ]
        db.add_all(parametros)
        db.commit()
        print("✅ Parámetros creados exitosamente")
        
        # Crear grabaciones
        fechas_grabacion = [
            datetime(2025, 1, 15),
            datetime(2025, 2, 20),
            datetime(2025, 3, 10),
            datetime(2025, 4, 5),
            datetime(2025, 5, 1)
        ]
        formatos = ["mp4", "avi", "mkv", "mov", "webm"]
        grabaciones = [
            Grabacion(
                nombre_archivo=f"grabacion_{i}.{formatos[i-1]}",
                ruta_archivo=f"/ruta/a/grabaciones/grabacion_{i}.{formatos[i-1]}",
                duracion=random.uniform(60.0, 300.0),
                formato=formatos[i-1],
                fecha_grabacion=fechas_grabacion[i-1]
            )
            for i in range(1, 6)
        ]
        db.add_all(grabaciones)
        db.commit()
        print("✅ Grabaciones creadas exitosamente")
        
        # Crear feedbacks
        feedbacks = [
            Feedback(
                grabacion_id=i,
                parametro_id=(j-1)*5 + 1,
                valor=round(random.uniform(0.0, 10.0), 1),
                comentario=f"Feedback para la grabación {i} sobre el parámetro {j}",
                es_manual=j % 2 == 0
            )
            for i in range(1, 6)
            for j in range(1, 6)
        ]
        db.add_all(feedbacks)
        db.commit()
        print("✅ Feedbacks creados exitosamente")
        
        print("✅ ¡Todos los datos de prueba creados con éxito!")
        
    except Exception as e:
        print(f"❌ Error al crear datos de prueba: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()
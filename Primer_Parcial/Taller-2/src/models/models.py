from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from src.database.connection import Base

class TipoMetrica(Base):
    __tablename__ = "tipos_metrica"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), unique=True, nullable=False)
    descripcion = Column(Text)
    
    # Relaciones
    metricas = relationship("Metrica", back_populates="tipo_metrica")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Metrica(Base):
    __tablename__ = "metricas"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    descripcion = Column(Text)
    tipo_metrica_id = Column(Integer, ForeignKey("tipos_metrica.id"))
    
    # Relaciones
    tipo_metrica = relationship("TipoMetrica", back_populates="metricas")
    parametros = relationship("Parametro", back_populates="metrica")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Parametro(Base):
    __tablename__ = "parametros"

    id = Column(Integer, primary_key=True, index=True)
    metrica_id = Column(Integer, ForeignKey("metricas.id"))
    nombre = Column(String(100), nullable=False)
    valor = Column(Float, nullable=False)
    unidad = Column(String(50), nullable=True)
    
    # Relaciones
    metrica = relationship("Metrica", back_populates="parametros")
    feedbacks = relationship("Feedback", back_populates="parametro")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Grabacion(Base):
    __tablename__ = "grabaciones"

    id = Column(Integer, primary_key=True, index=True)
    nombre_archivo = Column(String(255), nullable=False)
    ruta_archivo = Column(String(255), nullable=False)
    duracion = Column(Float)
    formato = Column(String(20))
    fecha_grabacion = Column(DateTime, default=datetime.utcnow)
    
    # Relaciones
    feedbacks = relationship("Feedback", back_populates="grabacion")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)
    grabacion_id = Column(Integer, ForeignKey("grabaciones.id"))
    parametro_id = Column(Integer, ForeignKey("parametros.id"))
    valor = Column(Float, nullable=False)
    comentario = Column(Text)
    es_manual = Column(Boolean, default=True)
    
    # Relaciones
    grabacion = relationship("Grabacion", back_populates="feedbacks")
    parametro = relationship("Parametro", back_populates="feedbacks")
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
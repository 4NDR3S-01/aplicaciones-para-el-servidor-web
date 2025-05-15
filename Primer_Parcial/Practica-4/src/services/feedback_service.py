from sqlalchemy.orm import Session
from typing import List, Optional
from src.models.models import TipoMetrica, Metrica, Parametro, Grabacion, Feedback
from src.schemas import schemas

class FeedbackService:
    @staticmethod
    def create_tipo_metrica(db: Session, tipo_metrica: schemas.TipoMetricaCreate):
        db_tipo_metrica = TipoMetrica(**tipo_metrica.model_dump())
        db.add(db_tipo_metrica)
        db.commit()
        db.refresh(db_tipo_metrica)
        return db_tipo_metrica
    
    @staticmethod
    def get_tipos_metrica(db: Session, skip: int = 0, limit: int = 100):
        return db.query(TipoMetrica).offset(skip).limit(limit).all()
    
    @staticmethod
    def get_tipo_metrica_by_id(db: Session, tipo_metrica_id: int):
        return db.query(TipoMetrica).filter(TipoMetrica.id == tipo_metrica_id).first()
    
    @staticmethod
    def update_tipo_metrica(db: Session, tipo_id: int, tipo_metrica: schemas.TipoMetricaCreate):
        db_tipo = db.query(TipoMetrica).filter(TipoMetrica.id == tipo_id).first()
        for key, value in tipo_metrica.model_dump().items():
            setattr(db_tipo, key, value)
        db.commit()
        db.refresh(db_tipo)
        return db_tipo
    
    @staticmethod
    def delete_tipo_metrica(db: Session, tipo_id: int):
        db_tipo = db.query(TipoMetrica).filter(TipoMetrica.id == tipo_id).first()
        db.delete(db_tipo)
        db.commit()
        return True
    
    @staticmethod
    def create_metrica(db: Session, metrica: schemas.MetricaCreate):
        db_metrica = Metrica(**metrica.model_dump())
        db.add(db_metrica)
        db.commit()
        db.refresh(db_metrica)
        return db_metrica
    
    @staticmethod
    def get_metricas(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Metrica).offset(skip).limit(limit).all()
    
    @staticmethod
    def get_metrica_by_id(db: Session, metrica_id: int):
        return db.query(Metrica).filter(Metrica.id == metrica_id).first()
    
    @staticmethod
    def update_metrica(db: Session, metrica_id: int, metrica: schemas.MetricaCreate):
        db_metrica = db.query(Metrica).filter(Metrica.id == metrica_id).first()
        for key, value in metrica.model_dump().items():
            setattr(db_metrica, key, value)
        db.commit()
        db.refresh(db_metrica)
        return db_metrica
    
    @staticmethod
    def delete_metrica(db: Session, metrica_id: int):
        db_metrica = db.query(Metrica).filter(Metrica.id == metrica_id).first()
        db.delete(db_metrica)
        db.commit()
        return True
    
    @staticmethod
    def create_parametro(db: Session, parametro: schemas.ParametroCreate):
        db_parametro = Parametro(**parametro.model_dump())
        db.add(db_parametro)
        db.commit()
        db.refresh(db_parametro)
        return db_parametro
    
    @staticmethod
    def get_parametros(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Parametro).offset(skip).limit(limit).all()
    
    @staticmethod
    def get_parametro_by_id(db: Session, parametro_id: int):
        return db.query(Parametro).filter(Parametro.id == parametro_id).first()
    
    @staticmethod
    def update_parametro(db: Session, parametro_id: int, parametro: schemas.ParametroCreate):
        db_parametro = db.query(Parametro).filter(Parametro.id == parametro_id).first()
        for key, value in parametro.model_dump().items():
            setattr(db_parametro, key, value)
        db.commit()
        db.refresh(db_parametro)
        return db_parametro
    
    @staticmethod
    def delete_parametro(db: Session, parametro_id: int):
        db_parametro = db.query(Parametro).filter(Parametro.id == parametro_id).first()
        db.delete(db_parametro)
        db.commit()
        return True
    
    @staticmethod
    def create_grabacion(db: Session, grabacion: schemas.GrabacionCreate):
        db_grabacion = Grabacion(**grabacion.model_dump())
        db.add(db_grabacion)
        db.commit()
        db.refresh(db_grabacion)
        return db_grabacion
    
    @staticmethod
    def get_grabaciones(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Grabacion).offset(skip).limit(limit).all()
    
    @staticmethod
    def get_grabacion_by_id(db: Session, grabacion_id: int):
        return db.query(Grabacion).filter(Grabacion.id == grabacion_id).first()
    
    @staticmethod
    def update_grabacion(db: Session, grabacion_id: int, grabacion: schemas.GrabacionCreate):
        db_grabacion = db.query(Grabacion).filter(Grabacion.id == grabacion_id).first()
        for key, value in grabacion.model_dump().items():
            setattr(db_grabacion, key, value)
        db.commit()
        db.refresh(db_grabacion)
        return db_grabacion
    
    @staticmethod
    def delete_grabacion(db: Session, grabacion_id: int):
        db_grabacion = db.query(Grabacion).filter(Grabacion.id == grabacion_id).first()
        db.delete(db_grabacion)
        db.commit()
        return True
    
    @staticmethod
    def create_feedback(db: Session, feedback: schemas.FeedbackCreate):
        db_feedback = Feedback(**feedback.model_dump())
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback
    
    @staticmethod
    def get_feedbacks(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Feedback).offset(skip).limit(limit).all()
    
    @staticmethod
    def get_feedback_by_id(db: Session, feedback_id: int):
        return db.query(Feedback).filter(Feedback.id == feedback_id).first()
    
    @staticmethod
    def get_feedbacks_by_grabacion(db: Session, grabacion_id: int):
        return db.query(Feedback).filter(Feedback.grabacion_id == grabacion_id).all()
    
    @staticmethod
    def update_feedback(db: Session, feedback_id: int, feedback: schemas.FeedbackCreate):
        db_feedback = db.query(Feedback).filter(Feedback.id == feedback_id).first()
        for key, value in feedback.model_dump().items():
            setattr(db_feedback, key, value)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback
    
    @staticmethod
    def delete_feedback(db: Session, feedback_id: int):
        db_feedback = db.query(Feedback).filter(Feedback.id == feedback_id).first()
        db.delete(db_feedback)
        db.commit()
        return True
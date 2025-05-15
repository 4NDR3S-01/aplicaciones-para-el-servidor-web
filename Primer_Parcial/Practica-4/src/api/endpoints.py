from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from src.database.connection import get_db
from src.services.feedback_service import FeedbackService
from src.schemas.schemas import (
    TipoMetricaCreate, TipoMetricaResponse,
    MetricaCreate, MetricaResponse,
    ParametroCreate, ParametroResponse,
    GrabacionCreate, GrabacionResponse,
    FeedbackCreate, FeedbackResponse, FeedbackDetailResponse
)

router = APIRouter()

# Endpoints para TipoMetrica
@router.post("/tipos-metrica/", response_model=TipoMetricaResponse, status_code=status.HTTP_201_CREATED)
def create_tipo_metrica(tipo_metrica: TipoMetricaCreate, db: Session = Depends(get_db)):
    return FeedbackService.create_tipo_metrica(db, tipo_metrica)

@router.get("/tipos-metrica/", response_model=List[TipoMetricaResponse])
def read_tipos_metrica(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return FeedbackService.get_tipos_metrica(db, skip, limit)

@router.get("/tipos-metrica/{tipo_id}", response_model=TipoMetricaResponse)
def read_tipo_metrica(tipo_id: int, db: Session = Depends(get_db)):
    tipo_metrica = FeedbackService.get_tipo_metrica_by_id(db, tipo_id)
    if tipo_metrica is None:
        raise HTTPException(status_code=404, detail="Tipo de métrica no encontrado")
    return tipo_metrica

@router.put("/tipos-metrica/{tipo_id}", response_model=TipoMetricaResponse)
def update_tipo_metrica(tipo_id: int, tipo_metrica: TipoMetricaCreate, db: Session = Depends(get_db)):
    db_tipo = FeedbackService.get_tipo_metrica_by_id(db, tipo_id)
    if db_tipo is None:
        raise HTTPException(status_code=404, detail="Tipo de métrica no encontrado")
    
    return FeedbackService.update_tipo_metrica(db, tipo_id, tipo_metrica)

@router.delete("/tipos-metrica/{tipo_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_tipo_metrica(tipo_id: int, db: Session = Depends(get_db)):
    db_tipo = FeedbackService.get_tipo_metrica_by_id(db, tipo_id)
    if db_tipo is None:
        raise HTTPException(status_code=404, detail="Tipo de métrica no encontrado")
    
    FeedbackService.delete_tipo_metrica(db, tipo_id)
    return None

# Endpoints para Metrica
@router.post("/metricas/", response_model=MetricaResponse, status_code=status.HTTP_201_CREATED)
def create_metrica(metrica: MetricaCreate, db: Session = Depends(get_db)):
    return FeedbackService.create_metrica(db, metrica)

@router.get("/metricas/", response_model=List[MetricaResponse])
def read_metricas(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return FeedbackService.get_metricas(db, skip, limit)

@router.get("/metricas/{metrica_id}", response_model=MetricaResponse)
def read_metrica(metrica_id: int, db: Session = Depends(get_db)):
    metrica = FeedbackService.get_metrica_by_id(db, metrica_id)
    if metrica is None:
        raise HTTPException(status_code=404, detail="Métrica no encontrada")
    return metrica

@router.put("/metricas/{metrica_id}", response_model=MetricaResponse)
def update_metrica(metrica_id: int, metrica: MetricaCreate, db: Session = Depends(get_db)):
    db_metrica = FeedbackService.get_metrica_by_id(db, metrica_id)
    if db_metrica is None:
        raise HTTPException(status_code=404, detail="Métrica no encontrada")
    
    return FeedbackService.update_metrica(db, metrica_id, metrica)

@router.delete("/metricas/{metrica_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_metrica(metrica_id: int, db: Session = Depends(get_db)):
    db_metrica = FeedbackService.get_metrica_by_id(db, metrica_id)
    if db_metrica is None:
        raise HTTPException(status_code=404, detail="Métrica no encontrada")
    
    FeedbackService.delete_metrica(db, metrica_id)
    return None

# Endpoints para Parametro
@router.post("/parametros/", response_model=ParametroResponse, status_code=status.HTTP_201_CREATED)
def create_parametro(parametro: ParametroCreate, db: Session = Depends(get_db)):
    return FeedbackService.create_parametro(db, parametro)

@router.get("/parametros/", response_model=List[ParametroResponse])
def read_parametros(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return FeedbackService.get_parametros(db, skip, limit)

@router.get("/parametros/{parametro_id}", response_model=ParametroResponse)
def read_parametro(parametro_id: int, db: Session = Depends(get_db)):
    parametro = FeedbackService.get_parametro_by_id(db, parametro_id)
    if parametro is None:
        raise HTTPException(status_code=404, detail="Parámetro no encontrado")
    return parametro

@router.put("/parametros/{parametro_id}", response_model=ParametroResponse)
def update_parametro(parametro_id: int, parametro: ParametroCreate, db: Session = Depends(get_db)):
    db_parametro = FeedbackService.get_parametro_by_id(db, parametro_id)
    if db_parametro is None:
        raise HTTPException(status_code=404, detail="Parámetro no encontrado")
    
    return FeedbackService.update_parametro(db, parametro_id, parametro)

@router.delete("/parametros/{parametro_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_parametro(parametro_id: int, db: Session = Depends(get_db)):
    db_parametro = FeedbackService.get_parametro_by_id(db, parametro_id)
    if db_parametro is None:
        raise HTTPException(status_code=404, detail="Parámetro no encontrado")
    
    FeedbackService.delete_parametro(db, parametro_id)
    return None

# Endpoints para Grabacion
@router.post("/grabaciones/", response_model=GrabacionResponse, status_code=status.HTTP_201_CREATED)
def create_grabacion(grabacion: GrabacionCreate, db: Session = Depends(get_db)):
    return FeedbackService.create_grabacion(db, grabacion)

@router.get("/grabaciones/", response_model=List[GrabacionResponse])
def read_grabaciones(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return FeedbackService.get_grabaciones(db, skip, limit)

@router.get("/grabaciones/{grabacion_id}", response_model=GrabacionResponse)
def read_grabacion(grabacion_id: int, db: Session = Depends(get_db)):
    grabacion = FeedbackService.get_grabacion_by_id(db, grabacion_id)
    if grabacion is None:
        raise HTTPException(status_code=404, detail="Grabación no encontrada")
    return grabacion

@router.put("/grabaciones/{grabacion_id}", response_model=GrabacionResponse)
def update_grabacion(grabacion_id: int, grabacion: GrabacionCreate, db: Session = Depends(get_db)):
    db_grabacion = FeedbackService.get_grabacion_by_id(db, grabacion_id)
    if db_grabacion is None:
        raise HTTPException(status_code=404, detail="Grabación no encontrada")
    
    return FeedbackService.update_grabacion(db, grabacion_id, grabacion)

@router.delete("/grabaciones/{grabacion_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_grabacion(grabacion_id: int, db: Session = Depends(get_db)):
    db_grabacion = FeedbackService.get_grabacion_by_id(db, grabacion_id)
    if db_grabacion is None:
        raise HTTPException(status_code=404, detail="Grabación no encontrada")
    
    FeedbackService.delete_grabacion(db, grabacion_id)
    return None

# Endpoints para Feedback
@router.post("/feedbacks/", response_model=FeedbackResponse, status_code=status.HTTP_201_CREATED)
def create_feedback(feedback: FeedbackCreate, db: Session = Depends(get_db)):
    return FeedbackService.create_feedback(db, feedback)

@router.get("/feedbacks/", response_model=List[FeedbackResponse])
def read_feedbacks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return FeedbackService.get_feedbacks(db, skip, limit)

@router.get("/feedbacks/{feedback_id}", response_model=FeedbackResponse)
def read_feedback(feedback_id: int, db: Session = Depends(get_db)):
    feedback = FeedbackService.get_feedback_by_id(db, feedback_id)
    if feedback is None:
        raise HTTPException(status_code=404, detail="Feedback no encontrado")
    return feedback

@router.get("/feedbacks/grabacion/{grabacion_id}", response_model=List[FeedbackResponse])
def read_feedbacks_by_grabacion(grabacion_id: int, db: Session = Depends(get_db)):
    return FeedbackService.get_feedbacks_by_grabacion(db, grabacion_id)

@router.put("/feedbacks/{feedback_id}", response_model=FeedbackResponse)
def update_feedback(feedback_id: int, feedback: FeedbackCreate, db: Session = Depends(get_db)):
    db_feedback = FeedbackService.get_feedback_by_id(db, feedback_id)
    if db_feedback is None:
        raise HTTPException(status_code=404, detail="Feedback no encontrado")
    
    return FeedbackService.update_feedback(db, feedback_id, feedback)

@router.delete("/feedbacks/{feedback_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_feedback(feedback_id: int, db: Session = Depends(get_db)):
    db_feedback = FeedbackService.get_feedback_by_id(db, feedback_id)
    if db_feedback is None:
        raise HTTPException(status_code=404, detail="Feedback no encontrado")
    
    FeedbackService.delete_feedback(db, feedback_id)
    return None
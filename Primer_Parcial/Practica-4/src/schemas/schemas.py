from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# TipoMetrica schemas
class TipoMetricaBase(BaseModel):
    nombre: str
    descripcion: Optional[str] = None

class TipoMetricaCreate(TipoMetricaBase):
    pass

class TipoMetricaResponse(TipoMetricaBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# Metrica schemas
class MetricaBase(BaseModel):
    nombre: str
    descripcion: Optional[str] = None
    tipo_metrica_id: int

class MetricaCreate(MetricaBase):
    pass

class MetricaResponse(MetricaBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# Parametro schemas
class ParametroBase(BaseModel):
    metrica_id: int
    nombre: str
    valor: float
    unidad: Optional[str] = None

class ParametroCreate(ParametroBase):
    pass

class ParametroResponse(ParametroBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# Grabacion schemas
class GrabacionBase(BaseModel):
    nombre_archivo: str
    ruta_archivo: str
    duracion: Optional[float] = None
    formato: Optional[str] = None
    fecha_grabacion: Optional[datetime] = None

class GrabacionCreate(GrabacionBase):
    pass

class GrabacionResponse(GrabacionBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

# Feedback schemas
class FeedbackBase(BaseModel):
    grabacion_id: int
    parametro_id: int
    valor: float
    comentario: Optional[str] = None
    es_manual: bool = True

class FeedbackCreate(FeedbackBase):
    pass

class FeedbackResponse(FeedbackBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class FeedbackDetailResponse(FeedbackResponse):
    grabacion: GrabacionResponse
    parametro: ParametroResponse

    class Config:
        from_attributes = True
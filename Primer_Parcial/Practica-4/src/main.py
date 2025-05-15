# src/main.py
from fastapi import FastAPI
from src.api.endpoints import router as api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Sistema de Gestión de Feedback",
    description="API para la gestión de feedback sobre grabaciones",
    version="1.0.0",
)

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas API
app.include_router(api_router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Bienvenido al Sistema de Gestión de Feedback"}
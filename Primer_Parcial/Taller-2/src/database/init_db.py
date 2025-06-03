# src/database/init_db.py
from src.database.connection import engine, Base
from src.models.models import *

def init_db():
    Base.metadata.create_all(bind=engine)
    print("Base de datos inicializada correctamente")

if __name__ == "__main__":
    init_db()
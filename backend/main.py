# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Kinesis API",
    description="API de Gestão e Agendamento para Fisioterapia Esportiva",
    version="1.0.0"
)

# Permitir requisições do frontend React
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "Kinesis API funcionando perfeitamente!"}
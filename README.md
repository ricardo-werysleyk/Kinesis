# ⚡ Kinesis - Fisioterapia Esportiva

O **Kinesis** é uma aplicação web completa projetada para gestão e agendamento de consultas focadas em fisioterapia esportiva, reabilitação e alta performance.

---

## Tech Stack

* **Frontend:** React (Vite) + Tailwind CSS (v4)
* **Backend:** Python + FastAPI + SQLAlchemy
* **Banco de Dados:** PostgreSQL

---

## Como Executar o Projeto Localmente

### 1. Backend (FastAPI)

1. Entre na pasta do backend: `cd backend`
2. Crie e ative o ambiente virtual: `python -m venv .venv` e depois `.\.venv\Scripts\Activate.ps1`
3. Instale as dependências: `pip install -r requirements.txt`
4. Inicie o servidor: `uvicorn main:app --reload`

> A API estará rodando em `http://localhost:8000` (Swagger em `http://localhost:8000/docs`).

---

### 2. Frontend (React)

1. Em outro terminal, entre na pasta do frontend: `cd frontend`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`

> A aplicação estará rodando em `http://localhost:5173`.

---

## Estrutura do Projeto

* `backend/` — API REST em Python com FastAPI
* `frontend/` — Interface do usuário em React com Tailwind CSS
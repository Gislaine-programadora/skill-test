# Skill Test - Fullstack Students App

Aplicação fullstack para gerenciamento de alunos, construída com **Node.js + Express + SQLite** no backend e **React + Vite + TypeScript** no frontend.

## 🚀 Tecnologias
- Backend: Node.js, Express, SQLite3
- Frontend: React, Vite, TypeScript, Material UI
- Banco de dados: SQLite (arquivo `school.db`)

---

## 📂 Estrutura de Pastas

skill-test/ ├── backend/        # API Express │   ├── src/ │   │   ├── config/ # Configuração do banco │   │   └── modules/students # Controller e rotas ├── frontend/       # Aplicação React ├── seed_db/        # Arquivos SQL e banco SQLite │   ├── schema.sql │   ├── seed.sql │   └── school.db


---

## ⚙️ Backend

### Instalação
```bash
cd backend
npm install

Inicializar banco
´´´bash
npm run db:init

Isso cria/popula o arquivo  com tabelas e dados iniciais.

Rodar servidor
´´´bash
npm start


## Endpoints principais
- GET /api/v1/students → lista todos os alunos
- GET /api/v1/students/:id → busca aluno por ID
- POST /api/v1/students → cria aluno
- PUT /api/v1/students/:id → atualiza aluno
- DELETE /api/v1/students/:id → remove aluno

🎨 Frontend
Instalação
cd frontend
npm install

Rodar aplicação´

´´´bash
npm run dev


# 🧪 Testes rápidos com curl
- Listar alunos:

 curl -X POST http://localhost:5007/api/v1/students \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Maria","last_name":"Souza","email":"maria@example.com","class_name":"2B","dob":"2011-03-15","gender":"female","phone":"888888888","address":"Rua B, 456"}'

📌 Observações
- O campo class_name no frontend corresponde à coluna class no banco.
- O banco SQLite é armazenado em seed_db/school.db.
- O backend deve estar rodando antes de iniciar o frontend.

<img width="563" height="513" alt="painel-student" src="https://github.com/user-attachments/assets/c9fac102-14d6-40b7-b0e5-a8317e67a569" />



👩‍💻 Autora
Projeto desenvolvido por Gislaine como parte de um skill test.






# Skill Test - Backend

API desenvolvida em **Node.js + Express + SQLite** para gerenciamento de alunos.

## 🚀 Tecnologias
- Node.js
- Express
- SQLite3

---

## ⚙️ Instalação

Dentro da pasta `backend/`:

```bash
npm install

🗄️ Inicializar banco de dados

´´´bash
npm run db:init

Isso cria/popula o arquivo  com tabelas e dados iniciais.

▶️ Rodar servidor

´´´bash
npm start
´´

Servidor disponível em:

http://localhost:5007


#  🔗 Endpoints principais
• 	 → lista todos os alunos
• 	 → busca aluno por ID
• 	 → cria aluno
• 	 → atualiza aluno
• 	 → remove aluno

🧪 Testes rápidos com curl

- Listar alunos:
curl http://localhost:5007/api/v1/students


- Criar aluno:

curl -X POST http://localhost:5007/api/v1/students \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Maria","last_name":"Souza","email":"maria@example.com","class_name":"2B","dob":"2011-03-15","gender":"female","phone":"888888888","address":"Rua B, 456"}'



  • 	Buscar aluno por ID

  curl http://localhost:5007/api/v1/students/1

  - Criar aluno


  curl -X POST http://localhost:5007/api/v1/students \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Maria","last_name":"Souza","email":"maria@example.com","class_name":"2B","dob":"2011-03-15","gender":"female","phone":"999999999","address":"Rua B, 456"}'


- Atualizar aluno

curl -X PUT http://localhost:5007/api/v1/students/1 \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Ana","last_name":"Silva","email":"ana@example.com","class_name":"3A"}'



  - Deletar aluno

curl -X DELETE http://localhost:5007/api/v1/students/1




👩‍💻 Autora
Projeto desenvolvido por Gislaine como parte de um skill test.

---
 





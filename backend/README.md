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
 

resultado da api backend rodando no terminal curl

Gislaine@gislaine-desenvolvedora MINGW64 ~/Desktop/coingbit (main)
$ curl http://localhost:5007/api/v1/students
[{"id":1,"first_name":"Ana","last_name":"Silva","email":"ana.silva@example.com","class":"3A","dob":null,"gender":null,"phone":null,"address":null,"created_at":"2025-12-11 01:36:35","updated_at":"2025-12-11 
01:54:22"},{"id":2,"first_name":"Maria","last_name":"Souza","email":"maria@example.com","class":"2B","dob":"2011-03-15","gender":"female","phone":"888888888","address":"Rua B, 456","created_at":"2025-12-11 
01:53:52","updated_at":"2025-12-11 01:53:52"}]


para navegador http://localhost:5007/api/v1/students

baixe o repositorio 

para rodar  cd backend  e depois  npm start  

http://localhost:5007/api/v1/students

resultado  format  .json

[{"id":1,"first_name":"Ana","last_name":"Silva","email":"ana.silva@example.com","class":"3A","dob":null,"gender":null,"phone":null,"address":null,"created_at":"2025-12-11 01:36:35","updated_at":"2025-12-11 01:54:22"},{"id":2,"first_name":"Maria","last_name":"Souza","email":"maria@example.com","class":"2B","dob":"2011-03-15","gender":"female","phone":"888888888","address":"Rua B, 456","created_at":"2025-12-11 01:53:52","updated_at":"2025-12-11 01:53:52"}]







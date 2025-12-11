# Skill-Test API em Go

Este projeto é uma API REST simples em **Go** para gerenciar estudantes.  
Ele utiliza **SQLite** como banco de dados e oferece operações de **CRUD** (Create, Read, Update, Delete).

Inicie o módulo Go:

go mod init exemplo.com/skill-test

Instale dependências:

▶️ Executando o Servidor
Para rodar a API:

go run main.go

📚 Rotas da API
1. Criar Estudante (POST)

2. Listar Estudantes (GET)

curl http://localhost:8080/students

3. Atualizar Estudante (PUT)

curl -X PUT -H "Content-Type: application/json" \
-d '{"name":"Ana Paula","course":"Física"}' \
"http://localhost:8080/students/update?id=1"

4. Deletar Estudante (DELETE)

curl -X DELETE "http://localhost:8080/students/delete?id=1"

✅ Testando


• 	Após rodar   go run main.go 
 , use os comandos curl acima para interagir com a API.
• 	Você pode também usar Postman ou Insomnia para testar as rotas com interface gráfica.

▶️ Executando o Servidor
Para rodar a API:
go run main.go


O servidor estará disponível em:
http://localhost:8080



📚 Rotas da API
1. Criar Estudante (POST)
curl -X POST -H "Content-Type: application/json" \
-d '{"name":"Ana","course":"Matemática"}' \
http://localhost:8080/students/create


2. Listar Estudantes (GET)
curl http://localhost:8080/students


3. Atualizar Estudante (PUT)
curl -X PUT -H "Content-Type: application/json" \
-d '{"name":"Ana Paula","course":"Física"}' \
"http://localhost:8080/students/update?id=1"


4. Deletar Estudante (DELETE)
curl -X DELETE "http://localhost:8080/students/delete?id=1"



🛠️ Estrutura do Projeto
skill-test/
├── main.go        # Código principal da API
├── go.mod         # Configuração do módulo Go
├── students.db    # Banco de dados SQLite (gerado automaticamente)
└── README.md      # Documentação do projeto



✅ Testando
- Após rodar go run main.go, use os comandos curl acima para interagir com a API.
- Você pode também usar Postman ou Insomnia para testar as rotas com interface gráfica.

---

👉 go run main.go


O servidor estará disponível em:


http://localhost:8080


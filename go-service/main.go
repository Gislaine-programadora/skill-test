package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"

	_ "github.com/mattn/go-sqlite3"
)

type Student struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Course string `json:"course"`
}

var db *sql.DB

func initDB() {
	var err error
	db, err = sql.Open("sqlite3", "./students.db")
	if err != nil {
		log.Fatal(err)
	}

	// Cria tabela se não existir
	createTable := `
	CREATE TABLE IF NOT EXISTS students (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		course TEXT NOT NULL
	);`
	_, err = db.Exec(createTable)
	if err != nil {
		log.Fatal(err)
	}
}

// CREATE
func createStudentHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}

	var s Student
	if err := json.NewDecoder(r.Body).Decode(&s); err != nil {
		http.Error(w, "Erro ao decodificar JSON", http.StatusBadRequest)
		return
	}

	res, err := db.Exec("INSERT INTO students(name, course) VALUES(?, ?)", s.Name, s.Course)
	if err != nil {
		http.Error(w, "Erro ao inserir estudante", http.StatusInternalServerError)
		return
	}

	id, _ := res.LastInsertId()
	s.ID = int(id)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(s)
}

// READ
func listStudentsHandler(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, name, course FROM students")
	if err != nil {
		http.Error(w, "Erro ao listar estudantes", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var students []Student
	for rows.Next() {
		var s Student
		rows.Scan(&s.ID, &s.Name, &s.Course)
		students = append(students, s)
	}

	json.NewEncoder(w).Encode(students)
}

// UPDATE
func updateStudentHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}

	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	var s Student
	if err := json.NewDecoder(r.Body).Decode(&s); err != nil {
		http.Error(w, "Erro ao decodificar JSON", http.StatusBadRequest)
		return
	}

	_, err = db.Exec("UPDATE students SET name=?, course=? WHERE id=?", s.Name, s.Course, id)
	if err != nil {
		http.Error(w, "Erro ao atualizar estudante", http.StatusInternalServerError)
		return
	}

	s.ID = id
	json.NewEncoder(w).Encode(s)
}

// DELETE
func deleteStudentHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}

	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	_, err = db.Exec("DELETE FROM students WHERE id=?", id)
	if err != nil {
		http.Error(w, "Erro ao deletar estudante", http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(w, "Estudante %d removido com sucesso", id)
}

func main() {
	initDB()

	http.HandleFunc("/students", listStudentsHandler)
	http.HandleFunc("/students/create", createStudentHandler)
	http.HandleFunc("/students/update", updateStudentHandler)
	http.HandleFunc("/students/delete", deleteStudentHandler)

	fmt.Println("Servidor rodando em http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
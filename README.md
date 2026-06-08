# Task App - Backend

API REST com Node.js e Express para gerenciamento de tarefas.

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
cd backend
npm install
```

## Execução

```bash
# Produção
npm start

# Desenvolvimento (com hot reload)
npm run dev
```

O servidor roda em `http://localhost:3000`.

## Endpoints

| Método | Rota         | Descrição           |
|--------|--------------|---------------------|
| GET    | /tasks       | Lista todas tarefas |
| GET    | /tasks/:id   | Busca tarefa por ID |
| POST   | /tasks       | Cria nova tarefa    |
| PUT    | /tasks/:id   | Atualiza tarefa     |
| DELETE | /tasks/:id   | Remove tarefa       |

## Exemplo de body (POST/PUT)

```json
{
  "title": "Estudar React Native",
  "description": "Fazer o desafio da faculdade",
  "done": false
}
```

> Os dados são armazenados em memória. Ao reiniciar o servidor, os dados são perdidos.

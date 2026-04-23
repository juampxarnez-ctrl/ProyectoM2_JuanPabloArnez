# 📌 MiniBlog API

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar **authors** y **posts**.

---

## 🚀 Tecnologías

* Node.js
* Express
* PostgreSQL
* Swagger (OpenAPI)
* Jest / Supertest

---

## 📦 Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/mini-blog-api.git
cd mini-blog-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env` en la raíz:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/miniblog
```

---

## ▶️ Ejecutar proyecto

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## 🧪 Tests

```bash
npm test
```

---

## 📚 Documentación (Swagger)

Abrir en navegador:

```text
http://localhost:3000/api-docs
```

---

## 📌 Endpoints

### 👤 Authors

| Método | Endpoint     | Descripción    |
| ------ | ------------ | -------------- |
| GET    | /authors     | Obtener todos  |
| GET    | /authors/:id | Obtener por ID |
| POST   | /authors     | Crear author   |
| PUT    | /authors/:id | Actualizar     |
| DELETE | /authors/:id | Eliminar       |

---

### 📝 Posts

| Método | Endpoint                | Descripción      |
| ------ | ----------------------- | ---------------- |
| GET    | /posts                  | Obtener todos    |
| GET    | /posts/:id              | Obtener por ID   |
| GET    | /posts/author/:authorId | Posts por author |
| POST   | /posts                  | Crear post       |
| PUT    | /posts/:id              | Actualizar       |
| DELETE | /posts/:id              | Eliminar         |

---

## 🧠 Validaciones

* `name` y `email` obligatorios en authors
* `title`, `content` y `author_id` obligatorios en posts
* manejo de errores:

  * `400 Bad Request`
  * `404 Not Found`
  * `500 Internal Server Error`

---

## 🧠 Uso de Inteligencia Artificial

Se utilizó IA como apoyo para:

* Debugging de errores
* Configuración de Swagger
* Implementación de tests
* Mejores prácticas en Express

Todas las soluciones fueron comprendidas y aplicadas manualmente.

---

## 📁 Estructura del proyecto

```bash
src/
 ├── routes/
 ├── services/
 ├── db.js
 ├── app.js
 └── server.js

tests/
openapi.yaml
README.md
```

---

## 👨‍💻 Autor

Juan Pablo

# 📌 MiniBlog API

API REST desarrollada con **Node.js**, **Express** y **PostgreSQL** para gestionar **authors** y **posts**.

El proyecto permite realizar operaciones CRUD completas sobre ambas entidades, documentar la API con Swagger/OpenAPI, ejecutar tests automatizados y desplegar la aplicación en Railway.


---

## 🚀 Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- OpenAPI (Swagger)
- swagger-ui-express
- yamljs
- Jest
- Supertest

---

## 📦 Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/juampxarnez-ctrl/ProyectoM2_JuanPabloArnez.git
cd ProyectoM2_JuanPabloArnez
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env` en la raíz:

```env
DB_URL=postgresql://usuario:password@localhost:5432/miniblog
PORT=3000
```
## 🗄️ Base de datos

Crear una base de datos llamada `miniblog` en PostgreSQL.

Luego ejecutar los scripts SQL incluidos en el proyecto:

### Crear tablas

```bash
psql -U postgres -d miniblog -f sql/setup.sql

psql -U postgres -d miniblog -f sql/seed.sql
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

```Documentación interactiva disponible en:
http://localhost:3000/api-docs
```

---
### 🌐 Deploy en Railway

# Aplicación desplegada en Railway:

* API pública: https://proyectom2juanpabloarnez-production.up.railway.app
* Swagger público: https://proyectom2juanpabloarnez-production.up.railway.app/api-docs

## Variables de entorno en Railway

* ```En el servicio web se configuró:
DB_URL=${{Postgres.DATABASE_URL}}
```

## Internal URL

* ```La base de datos utiliza la URL interna que Railway provee automáticamente a través de:

${{Postgres.DATABASE_URL}}
```

## Public URL
* API: https://proyectom2juanpabloarnez-production.up.railway.app
* Swagger: https://proyectom2juanpabloarnez-production.up.railway.app/api-docs
* Observación importante:
La base PostgreSQL en Railway se crea vacía, por lo que fue necesario ejecutar manualmente sql/setup.sql y sql/seed.sql sobre la base de producción para crear las tablas y cargar datos iniciales.

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
## 📚 Proceso de desarrollo y aplicación de las lectures

El proyecto fue desarrollado aplicando progresivamente los contenidos trabajados en las lectures del módulo backend.

### Etapas del proceso

1. Configuración inicial del servidor con Express  
2. Organización del proyecto en rutas, servicios y manejo de errores  
3. Modelado de base de datos (`authors` y `posts`)  
4. Conexión a PostgreSQL utilizando `pg`  
5. Implementación de CRUD completo  
6. Validaciones y manejo de errores  
7. Implementación de tests con Jest y Supertest  
8. Documentación con Swagger/OpenAPI  
9. Deploy en Railway  

### Dificultades encontradas

- errores al conectar rutas en Express  
- diferencias entre CommonJS y ES Modules  
- validaciones incorrectas en requests  
- errores por tablas faltantes en PostgreSQL  
- conflictos entre `DB_URL` y `DATABASE_URL`  
- problemas con rutas dinámicas (`/posts/:id` vs `/posts/author/:authorId`)  
- configuración de tests y cierre de conexiones  
- configuración de Swagger (`openapi.yaml`)  
- creación manual de tablas en Railway tras el deploy  

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
ProyectoM2_JuanPabloArnez/
├── sql/
│   ├── setup.sql
│   └── seed.sql
├── src/
│ ├── controllers/
│ │ └── usersController.js
│ ├── db/
│ │ └── index.js
│ ├── errors/
│ │ ├── errorHandler.js
│ │ └── errors.js
│ ├── routes/
│ │ ├── authors.routes.js
│ │ └── posts.routes.js
│ ├── services/
│ │ ├── authors.service.js
│ │ └── posts.service.js
│ ├── validators/
│ │ └── userValidators.js
│ ├── app.js
│ ├── db.js
│ └── server.js
│
├── tests/
│ └── authors.test.js
│
├── openapi.yaml
├── package.json
├── package-lock.json
└── README.md
```

---

## 👨‍💻 Autor

Arnez Juan Pablo

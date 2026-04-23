# -Documentación del uso de Inteligencia Artificial

Durante el desarrollo del proyecto MiniBlog API se utilizó inteligencia artificial como herramienta de apoyo para resolver dudas, depurar errores y mejorar la calidad del código.

El uso de IA fue complementario al aprendizaje, permitiendo aplicar de forma práctica los contenidos vistos en las lectures.

---

## -Áreas donde se utilizó IA

### 1. Configuración inicial del proyecto

Se utilizó IA para:

- estructurar el proyecto con Express
- definir la separación en rutas, servicios y manejo de errores
- configurar el servidor base (`app.js`, `server.js`)

---

### 2. Conexión con PostgreSQL

Se utilizó IA para:

- configurar la conexión con `pg`
- definir el uso de `DB_URL` en lugar de configuraciones separadas
- resolver errores de conexión a la base de datos

---

### 3. Implementación de endpoints (CRUD)

IA ayudó en:

- estructuración de endpoints REST
- manejo correcto de métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- separación de lógica en services

---

### 4. Validaciones y manejo de errores

Se utilizó IA para:

- implementar validaciones de campos obligatorios
- definir respuestas HTTP correctas (`400`, `404`, `500`)
- crear un middleware de manejo de errores (`errorHandler`)

---

## -Principales dificultades donde se utilizó IA

### 🔴 1. Conflicto de rutas en Express

Problema:
- La ruta `/posts/:id` interceptaba `/posts/author/:authorId`

Solución:
- Se reordenaron las rutas para que `/posts/author/:authorId` esté antes

---

### 🔴 2. Error al usar Jest con ES Modules

Problema:
- Error: `Cannot use import statement outside a module`

Solución:
- Se decidió usar CommonJS (`require`) o cambiar a Vitest temporalmente
- Finalmente se adaptó Jest correctamente al proyecto

---

### 🔴 3. Error 500 en tests (POST /authors)

Problema:
- El test esperaba `201` pero devolvía `500`

Causa:
- Error en el body o en la base de datos

Solución:
- Corrección del formato del request
- revisión del service

---

### 🔴 4. Problemas con variables de entorno en Railway

Problema:
- Error de conexión a la base (`ENOTFOUND base`)

Causa:
- Uso incorrecto de la variable `DB_URL`

Solución:
- Configuración correcta:
```env
DB_URL=${{Postgres.DATABASE_URL}}
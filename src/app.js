const express = require('express');
const path = require('path');
const authorsRoutes = require('./routes/authors.routes');
const postsRoutes = require('./routes/posts.routes');
const { errorHandler } = require('./errors/errorHandler');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load(path.join(__dirname, '../openapi.yaml'));

const app = express();

app.use(express.json());

// test
app.get('/', (req, res) => {
  res.json({ ok: true });
});

// rutas
app.use('/authors', authorsRoutes);
app.use('/posts', postsRoutes);

// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 404
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// errores
app.use(errorHandler);

module.exports = app;


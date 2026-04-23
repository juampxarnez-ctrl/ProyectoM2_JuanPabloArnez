require('dotenv').config();

const app = require('./app');
const db = require('./db');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// db test
db.query('SELECT NOW()')
  .then(res => console.log('DB conectada:', res.rows[0]))
  .catch(err => {
    console.error('Error DB:', err);
    process.exit(1);
  });
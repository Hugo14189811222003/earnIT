const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routers/usuario.router.js');

const app = express();
app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

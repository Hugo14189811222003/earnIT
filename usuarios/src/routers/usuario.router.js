const express = require('express');
const { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario } = require('../controllers/usuario.controller.js');
const router = express.Router();

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.put('/:id_usuario', actualizarUsuario);
router.delete('/:id_usuario', eliminarUsuario);

module.exports = router;

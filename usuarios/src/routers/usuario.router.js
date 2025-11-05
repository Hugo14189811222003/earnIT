const express = require('express');
const { crearUsuario, obtenerUsuarios } = require('../controllers/usuario.controller.js');
const router = express.Router();

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);

module.exports = router;

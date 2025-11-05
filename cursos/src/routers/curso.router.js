const {obtenerCursos, crearCurso, actualizarCurso, eliminarCurso, obtenerCursoPorId} = require('../controllers/curso.controller.js');
const router = require('express').Router();

router.get('/', obtenerCursos);
router.get('/:id_curso', obtenerCursoPorId);
router.post('/', crearCurso);
router.put('/:id_curso', actualizarCurso);
router.delete('/:id_curso', eliminarCurso);

module.exports = router;
const CursoService = require('../service/curso.service.js');
const service = new CursoService();

module.exports.obtenerCursos = async (req, res) => {
    try {
        const cursos = await service.listarCursos();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.obtenerCursoPorId = async (req, res) => {
    try {
        const cursoEncontradoPorId = await service.obtenerCursoPorId(req.params.id_curso);
        res.status(200).json(cursoEncontradoPorId);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.crearCurso = async (req, res) => {
    try {
        const nuevoCurso = await service.crearCurso(req.body);
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.actualizarCurso = async (req, res) => {
    try {
        const cursoActualizado = await service.actualizarCurso(req.params.id_curso, req.body);
        res.status(200).json(cursoActualizado);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.eliminarCurso = async (req, res) => {
    try {
        const cursoEliminado = await service.eliminarCurso(req.params.id_curso);
        res.status(200).json(cursoEliminado);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
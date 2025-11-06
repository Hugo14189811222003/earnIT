const CursoRepository = require('../repository/MySQLCursoRepository.js');

const  repo = new CursoRepository();

class CursoService {
    async listarCursos() {
        return await repo.obtenerCursos();
    }
    async obtenerCursoPorId(id_curso) {
        return await repo.obtenerCursoPorId(id_curso);
    }
    async crearCurso(data) {
        return await repo.crearCurso({
            titulo: data.titulo,
            descripcion: data.descripcion,
            duracion: data.duracion
        })
    }
    async actualizarCurso(id_curso, data) {
        const existeId = await repo.obtenerCursoPorId(id_curso);
        if (!existeId) {
            throw new Error('Curso no encontrado');
        }
        return await repo.actualizarCurso(id_curso, {
            titulo: data.titulo,
            descripcion: data.descripcion,
            duracion: data.duracion
        });
    }
    async eliminarCurso (id_curso) {
        const existeId = await repo.obtenerCursoPorId(id_curso);
        if (!existeId) {
            throw new Error('Curso no encontrado');
        }
        return repo.eliminarCurso(id_curso);
    }
}

module.exports = CursoService
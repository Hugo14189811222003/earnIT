const pool = require('../config/db.js');

class CursoRepository {
    async obtenerCursos() {
        const  [result] = await pool.query('SELECT * FROM curso');
        return result;
    }
    async obtenerCursoPorId(id_curso) {
        const [result] = await pool.query('SELECT * FROM curso WHERE id_curso = ?', [id_curso]);
        return result[0];
    }
    async crearCurso({titulo, descripcion, duracion}) {
        const [result] = await pool.query(
            'INSERT INTO curso (titulo, descripcion, duracion) VALUES (?, ?, ?)',
            [titulo, descripcion, duracion]
        );
        return result;
    }
    async actualizarCurso(id_curso, {titulo, descripcion, duracion}) {
        const [result] = await pool.query(
            'UPDATE curso SET titulo = ?, descripcion = ?, duracion = ? WHERE id_curso = ?',
            [titulo,descripcion, duracion, id_curso]
        );
        return result;
    }
    async eliminarCurso(id_curso) {
        const [result] = await pool.query(
            'DELETE FROM curso WHERE id_curso = ?',
            [id_curso]
        );
        return result;
    }
}

module.exports = CursoRepository;
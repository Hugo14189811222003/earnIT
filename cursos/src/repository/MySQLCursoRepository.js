const pool = require('../config/db.js');
const ICursoRepository = require('./ICursoRepository.js');

class MySQLCursoRepository extends ICursoRepository {
  async obtenerCursos() {
    const [rows] = await pool.query('SELECT * FROM curso');
    return rows;
  }

  async obtenerCursoPorId(id_curso) {
    const [rows] = await pool.query('SELECT * FROM curso WHERE id_curso = ?', [id_curso]);
    return rows[0];
  }

  async crearCurso({ titulo, descripcion, duracion, progreso }) {
    const [result] = await pool.query(
      'INSERT INTO curso (titulo, descripcion, duracion, progreso) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, duracion, progreso]
    );
    return result;
  }

  async actualizarCurso(id_curso, { titulo, descripcion, duracion, progreso }) {
    const [result] = await pool.query(
      'UPDATE curso SET titulo = ?, descripcion = ?, duracion = ?, progreso = ? WHERE id_curso = ?',
      [titulo, descripcion, duracion, progreso, id_curso]
    );
    return result;
  }

  async eliminarCurso(id_curso) {
    const [result] = await pool.query('DELETE FROM curso WHERE id_curso = ?', [id_curso]);
    return result;
  }
}

module.exports = MySQLCursoRepository;

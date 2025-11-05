const pool = require('../config/db.js');

class UsuarioRepository {
  async crearUsuario({ nombre, email, password }) {
    const [result] = await pool.query(
      'INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)',
      [nombre, email, password]
    );
    return result;
  }

  async obtenerUsuarioPorEmail(email) {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
    return rows[0];
  }

  async obtenerTodos() {
    const [rows] = await pool.query('SELECT * FROM usuario');
    return rows;
  }
}

module.exports = UsuarioRepository;
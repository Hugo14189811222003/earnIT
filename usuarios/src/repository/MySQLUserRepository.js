const pool = require('../config/db.js');
const IUserRepository = require('./IUserRepository.js');

class MySQLUserRepository extends IUserRepository {

  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
    return rows[0];
  }

  async createUser({ nombre, email, password }) {
    const [result] = await pool.query(
      'INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)',
      [nombre, email, password]
    );
    return result;
  }

  async getUserByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
    return rows[0];
  }

  async getAllUsers() {
    const [rows] = await pool.query('SELECT * FROM usuario');
    return rows;
  }

  async updateUser(id_usuario, { nombre, email, password }) {
    const [result] = await pool.query(
      'UPDATE usuario SET nombre = ?, email = ?, password = ? WHERE id_usuario = ?',
      [nombre, email, password, id_usuario]
    );
    return result;
  }

  async deleteUser(id_usuario) {
    const [result] = await pool.query(
      'DELETE FROM usuario WHERE id_usuario = ?',
      [id_usuario]
    );
    return result;
  }
}

module.exports = MySQLUserRepository;
const bcrypt = require('bcrypt');
const UsuarioRepository = require('../repository/usuario.repository.js');

const repo = new UsuarioRepository();

class UsuarioService {
  async registrarUsuario(data) {
    const existente = await repo.obtenerUsuarioPorEmail(data.email);
    if (existente) throw new Error('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await repo.crearUsuario({ ...data, password: hashedPassword });
  }

  async listarUsuarios() {
    return await repo.obtenerTodos();
  }
}

module.exports = { UsuarioService };
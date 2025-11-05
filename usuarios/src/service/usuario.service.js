const bcrypt = require('bcrypt');
const UsuarioRepository = require('../repository/usuario.repository.js');

const repo = new UsuarioRepository();

class UsuarioService {
  async registrarUsuario(data) {
    const existente = await repo.obtenerUsuarioPorEmail(data.email);
    if (existente) throw new Error('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await repo.crearUsuario({ 
      nombre: data.nombre, 
      email: data.email, 
      password: hashedPassword 
    });
  }

  async listarUsuarios() {
    return await repo.obtenerTodos();
  }

  async actualizarUsuario(id_usuario, data) {
    const existente = await repo.obtenerUsuarioPorEmail(data.email);

    if (existente && existente.id_usuario !== parseInt(id_usuario)) {
      throw new Error('El email ya está en uso por otro usuario');
    }

    let hashedPassword = data.password;
    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password, 10);
    }

    const result = await repo.actualizarUsuario(id_usuario, {
      nombre: data.nombre,
      email: data.email,
      password: hashedPassword
    });

    if (result.affectedRows === 0) {
      throw new Error('Usuario no encontrado');
    }

    return { message: 'Usuario actualizado con éxito' };
  }

  async eliminarUsuario(id) {
    const result = await repo.eliminarUsuario(id);
    if (result.affectedRows === 0) {
      throw new Error('Usuario no encontrado');
    }
    return { message: 'Usuario eliminado con éxito' };
  }
}

module.exports = { UsuarioService };

const bcrypt = require('bcrypt');

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async registrarUsuario(data) {
    if (!data.nombre || !data.email || !data.password) {
      throw new Error('Nombre, email y password son requeridos');
    }
    console.log(data)
    const existente = await this.userRepository.getUserByEmail(data.email);
    if (existente) throw new Error('El usuario ya existe');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await this.userRepository.createUser({
      nombre: data.nombre,
      email: data.email,
      password: hashedPassword
    });
  }

  async listarUsuarios() {
    return await this.userRepository.getAllUsers();
  }

  async actualizarUsuario(id_usuario, data) {
    const existente = await this.userRepository.getUserByEmail(data.email);

    if (existente && existente.id_usuario !== parseInt(id_usuario)) {
      throw new Error('El email ya está en uso por otro usuario');
    }

    let hashedPassword = data.password;
    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password, 10);
    }

    const result = await this.userRepository.updateUser(id_usuario, {
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
    const result = await this.userRepository.deleteUser(id);
    if (result.affectedRows === 0) {
      throw new Error('Usuario no encontrado');
    }
    return { message: 'Usuario eliminado con éxito' };
  }
}

module.exports = { UserService };

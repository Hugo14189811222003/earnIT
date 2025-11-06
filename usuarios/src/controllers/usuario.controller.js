const { UserService } = require('../service/usuario.service.js');
const MySQLUserRepository = require('../repository/MySQLUserRepository.js');

const userRepository = new MySQLUserRepository();
const userService = new UserService(userRepository);

module.exports.crearUsuario = async (req, res) => {
  try {
    const result = await userService.registrarUsuario(req.body);
    res.status(201).json({ message: 'Usuario creado', id: result.insertId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await userService.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.actualizarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const result = await userService.actualizarUsuario(id_usuario, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.eliminarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const result = await userService.eliminarUsuario(id_usuario);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
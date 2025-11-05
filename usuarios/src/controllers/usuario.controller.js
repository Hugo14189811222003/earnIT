const { UsuarioService } = require('../service/usuario.service.js');
const service = new UsuarioService();

module.exports.crearUsuario = async (req, res) => {
  try {
    const result = await service.registrarUsuario(req.body);
    res.status(201).json({ message: 'Usuario creado', id: result.insertId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await service.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.actualizarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const result = await service.actualizarUsuario(id_usuario, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.eliminarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const result = await service.eliminarUsuario(id_usuario);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
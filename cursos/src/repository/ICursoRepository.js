class ICursoRepository {
  async obtenerCursos() {
    throw new Error("Method 'obtenerCursos()' must be implemented.");
  }

  async obtenerCursoPorId(id_curso) {
    throw new Error("Method 'obtenerCursoPorId()' must be implemented.");
  }

  async crearCurso({ titulo, descripcion, duracion, progreso }) {
    throw new Error("Method 'crearCurso()' must be implemented.");
  }

  async actualizarCurso(id_curso, { titulo, descripcion, duracion, progreso }) {
    throw new Error("Method 'actualizarCurso()' must be implemented.");
  }

  async eliminarCurso(id_curso) {
    throw new Error("Method 'eliminarCurso()' must be implemented.");
  }
}

module.exports = ICursoRepository;

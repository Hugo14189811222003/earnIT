# Arquitectura de Microservicios + Patrón Repository
## CRUD: usuario y cursos

Para la creación de el crud de usuario utilice directamente node.js como motor de ejecucion más express.

### Dependencias
- "body-parser": "^2.2.0"
- "dotenv": "^17.2.3"
- "express": "^5.1.0"
- "mysql2": "^3.15.3"
- "nodemon": "^3.1.10"
- "bcrypt": "^6.0.0"
- "nodemon": "^3.1.10"

### Instruciones
Primero me encarge de crear directamente las carpetas necesaría para el CRUD: Controllers, Routers, Database, repository y service.

- Controllers: En esta sesión existira directamente los controladores con la cual estaran los metodos del crud(eliminar, actualizar, obtener y crear).
- Routers: En esta sesión se asignaran las rutas especificas donde se encontrara la API REST de cada funcion del controlador.
- Router: para manejar las rutas de las peticiones.
- Database: para tener una copia de la db de mysql.
- Service: para establecer las reglas necesarias y validaciones e envio de información al repository.
- Repository: Poder hacer la ejecucion de comando SQL.

En mi variable de entorno .env tengo las credenciales necesarias para la base de datos MySQL.

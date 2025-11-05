# LearnIT

- Frontend: A react service
- ngnx: A routing mechanism

## /user: manages operations about users:
• Registrar y autenticar usuarios.
• Administrar catálogo de cursos.

| email | name | last name | user_id | birthdate |
|------|----|--------|----------|----------------|

- /auth: allows auth operations

POST   /user
GET    /user/{id}
UPDATE /user/{id}
DELETE /user/{id}

a user can be either a student or a teacher
a teacher can create courses
a user must be inscriptionsd to track his improvement

## /courses: see courses

| course_name | created_by | number_of_lessons | created_at | course_id |
|-|-|-|-|-|

POST   /courses
GET    /course/{id}
UPDATE /course/{id}
DELETE /cource/{id}

a course has lessons
a lesson can be either completed or unseen

## /lessons

GET /{course_id}/{lesson_id}

| lesson_id | course_id | content |
|-----------|-----------|----------|

## /inscriptions
• Consultar progreso y estado.
• Inscribir alumnos en cursos.
relates users to courses

GET    /inscriptions 405
GET    /inscriptions/{user_id}
POST   /inscriptions/{course_id}/{user_id}
UPDATE /inscriptions/{course_id}/{user_id}/{progress}
DELETE /inscriptions/{course_id}/{user_id}

| course_id | user_id | progress |
|-----------|-------|------------|

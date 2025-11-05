# inscriptions

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

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

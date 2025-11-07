import { Pool } from "pg";
import { Inscription } from "./IInscriptionRepository";
import { InscriptionRepository } from "./IInscriptionRepository";

export class PostgresInscriptionRepository implements InscriptionRepository {
    private pool: Pool;

    private constructor(pool: Pool) {
        this.pool = pool;
    }

    public static async build() {
        const dbName = process.env.POSTGRES_DB || "earnIT";
        const newPool = new Pool({
            connectionString: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${dbName}`,
        });

        return new PostgresInscriptionRepository(newPool);
    }

    async get(user_id: string): Promise<Inscription[]> {
        const result = await this.pool.query("SELECT * FROM inscriptions WHERE user_id = $1", [user_id]);
        return result.rows;
    }

    async create(course_id: string, user_id: string): Promise<Inscription> {
        const result = await this.pool.query(
            "INSERT INTO inscriptions (course_id, user_id) VALUES ($1, $2) RETURNING *",
            [course_id, user_id]
        );
        return result.rows[0];
    }

    async update(course_id: string, user_id: string, progress: number): Promise<Inscription | null> {
        const result = await this.pool.query(
            "UPDATE inscriptions SET progress = $1 WHERE course_id = $2 AND user_id = $3 RETURNING *",
            [progress, course_id, user_id]
        );
        return result.rows.length > 0 ? result.rows[0] : null;
    }

    async delete(course_id: string, user_id: string): Promise<boolean> {
        const result = await this.pool.query("DELETE FROM inscriptions WHERE course_id = $1 AND user_id = $2", [course_id, user_id]);
        return result.rowCount > 0;
    }
}

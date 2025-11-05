import { Pool } from "pg";

export interface Inscription {
    course_id: string;
    user_id: string;
    progress: number;
}

export interface InscriptionRepository {
    createTable(): Promise<void>;
    get(user_id: string): Promise<Inscription[]>;
    create(course_id: string, user_id: string): Promise<Inscription>;
    update(course_id: string, user_id: string, progress: number): Promise<Inscription | null>;
    delete(course_id: string, user_id: string): Promise<boolean>;
}

export class PostgresInscriptionRepository implements InscriptionRepository {
    private pool: Pool;

    private static dbName: string = "earnIT";

    private constructor(pool: Pool) {
        this.pool = pool;
    }

    public static async build() {
        let pool = new Pool({
            connectionString: "postgresql://postgres:mysecretpassword@192.168.1.64:7070/",
        });
        try {
            const client = await pool.connect();
            try {
                const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${this.dbName}'`);
                if (res.rowCount === 0) {
                    await client.query(`CREATE DATABASE "${this.dbName}"`);
                    console.log(`Database ${this.dbName} created`);
                }
            } finally {
                client.release();
            }
        } catch (error) {
            console.error("Error checking or creating database:", error);
        } finally {
            await pool.end();
        }

        const newPool = new Pool({
            connectionString: `postgresql://postgres:mysecretpassword@192.168.1.64:7070/${this.dbName}`,
        });

        return new PostgresInscriptionRepository(newPool);
    }

    async createTable(): Promise<void> {
        const client = await this.pool.connect();
        try {
            await client.query(`
                CREATE TABLE IF NOT EXISTS inscriptions (
                    course_id VARCHAR(255) NOT NULL,
                    user_id VARCHAR(255) NOT NULL,
                    progress INTEGER DEFAULT 0,
                    PRIMARY KEY (course_id, user_id)
                );
            `);
        } finally {
            client.release();
        }
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

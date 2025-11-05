import express, { Express, Request, Response } from "express";
import { PostgresInscriptionRepository } from "./repository";

const app: Express = express();
const port = process.env.PORT || 3001;
let repository: PostgresInscriptionRepository;

app.get("/inscriptions/:user_id", async (req: Request, res: Response) => {
    const user_id = req.params.user_id;
    try {
        const inscriptions = await repository.get(user_id);
        res.json(inscriptions);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/inscriptions/:course_id/:user_id", async (req: Request, res: Response) => {
    const { course_id, user_id } = req.params;
    try {
        const new_inscription = await repository.create(course_id, user_id);
        res.status(201).json(new_inscription);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.put("/inscriptions/:course_id/:user_id/:progress", async (req: Request, res: Response) => {
    const { course_id, user_id, progress } = req.params;
    try {
        const updated_inscription = await repository.update(course_id, user_id, parseInt(progress));
        if (updated_inscription) {
            res.json(updated_inscription);
        } else {
            res.status(404).send("Inscription not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.delete("/inscriptions/:course_id/:user_id", async (req: Request, res: Response) => {
    const { course_id, user_id } = req.params;
    try {
        const success = await repository.delete(course_id, user_id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send("Inscription not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

async function startServer() {
    try {
        repository = await PostgresInscriptionRepository.build();
        await repository.createTable();
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database. Exiting...");
        process.exit(1);
    }
}

startServer();

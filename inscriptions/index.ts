import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3001;

interface Inscription {
    course_id: string;
    user_id: string;
    progress: number;
}

let inscriptions: Inscription[] = [];

app.get("/inscriptions", (req: Request, res: Response) => {
    res.status(405).send("Method Not Allowed");
});

app.get("/inscriptions/:user_id", (req: Request, res: Response) => {
    const user_id = req.params.user_id;
    const user_inscriptions = inscriptions.filter(inscription => inscription.user_id === user_id);
    res.json(user_inscriptions);
});

app.post("/inscriptions/:course_id/:user_id", (req: Request, res: Response) => {
    const { course_id, user_id } = req.params;
    const new_inscription: Inscription = { course_id, user_id, progress: 0 };
    inscriptions.push(new_inscription);
    res.status(201).json(new_inscription);
});

app.put("/inscriptions/:course_id/:user_id/:progress", (req: Request, res: Response) => {
    const { course_id, user_id, progress } = req.params;
    const inscription_index = inscriptions.findIndex(inscription => inscription.course_id === course_id && inscription.user_id === user_id);
    if (inscription_index > -1) {
        inscriptions[inscription_index].progress = parseInt(progress);
        res.json(inscriptions[inscription_index]);
    } else {
        res.status(404).send("Inscription not found");
    }
});

app.delete("/inscriptions/:course_id/:user_id", (req: Request, res: Response) => {
    const { course_id, user_id } = req.params;
    const initial_length = inscriptions.length;
    inscriptions = inscriptions.filter(inscription => !(inscription.course_id === course_id && inscription.user_id === user_id));
    if (inscriptions.length < initial_length) {
        res.status(204).send();
    } else {
        res.status(404).send("Inscription not found");
    }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    try {
        res.send("Nodejs Started");
    } catch (err) {
        throw `Message: ${err}`;
    }
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server started');
});
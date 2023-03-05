import { Router } from "express";
import myDataSource from "../app-data-source.js";
import { Planet } from "../entities/planet.entity.js";

const router = Router();

router.get('/', async (_req, res) => {
    try {
        const planets = await myDataSource.getRepository(Planet).find();
        res.status(200).json(planets);
    } catch (err) {
        res.status(500);
        throw 'Message:' + err;
    }
});

export default router;
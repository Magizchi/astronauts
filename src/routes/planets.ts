import { Router } from "express";
import myDataSource from "../app-data-source.js";
import { Planets } from "../entities/planet.entity.js";

const router = Router();

router.get('/', async (_req, res) => {
    try {
        const planets = await myDataSource.getRepository(Planets).find();
        res.status(200).json(planets);
    } catch (err) {
        res.status(400);
        throw 'Message:' + err;
    }
});

export default router;
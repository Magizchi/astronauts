import { Router } from "express";
import Planets from './planets.js';
import Astronautes from './astronautes.js';

const router = Router();

router.use("/planets", Planets);
router.use("/astronautes", Astronautes);

export default router;

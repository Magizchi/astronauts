import { Router } from "express";
import Planets from './planets.js';
import Astronauts from './astronauts.js';
import Companies from './companies.js';

const router = Router();

router.use("/planets", Planets);
router.use("/astronauts", Astronauts);
router.use("/companies", Companies);

export default router;

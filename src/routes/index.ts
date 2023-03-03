import { Router } from "express";
import Planets from './planets.js';
import Astronauts from './astronauts.js';

const router = Router();

router.use("/planets", Planets);
router.use("/astronauts", Astronauts);

export default router;

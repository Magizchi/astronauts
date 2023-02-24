import { Router } from "express";
import Planets from './planets.js';

const router = Router();

router.use("/planets", Planets)

export default router;

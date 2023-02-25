import { Router, Request, Response } from "express";
import myDataSource from "../app-data-source.js";
import { Astronautes } from "../entities/astronaute.entity.js";


const router = Router();
const AstronautesRepository = myDataSource.getRepository(Astronautes);

router.get('/', async (_req: Request, res: Response) => {
  try {
    const astronautes = await AstronautesRepository.find({
      relations: {
        planet: true
      }
    });
    res.status(200).json(astronautes);
  } catch (err) {
    res.status(400);
    throw err;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await myDataSource.getRepository(Astronautes).find({ where: { id: +req.params.id } });
    res.status(200).json(response);
  } catch (err) {
    res.status(400);
    throw err;
  }
});

router.post('/create', async (req: Request, res: Response) => {
  try {
    const astronautes = AstronautesRepository.create(req.body);
    const result = await AstronautesRepository.save(astronautes);
    res.status(200).json(result);

  } catch (err) {
    res.status(400);
    throw 'Message' + err;
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const astronautes = await AstronautesRepository.save({ id: +req.params.id, ...req.body });
    res.status(200).json(astronautes);
  } catch (err) {
    res.status(400);
    throw err;
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await AstronautesRepository.delete(+req.params.id);
    res.status(200);
  } catch (err) {
    res.status(400);
    throw err;
  }
});



export default router;

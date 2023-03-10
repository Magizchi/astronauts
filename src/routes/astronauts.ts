import { Router, Request, Response } from "express";
import myDataSource from "../app-data-source.js";
import { Astronaut } from "../entities/astronaut.entity.js";


const router = Router();
const AstronautesRepository = myDataSource.getRepository(Astronaut);

router.post('/', async (req: Request, res: Response) => {
  try {
    if (req.body.name === '' || req.body.planet === null) {
      return res.status(400).json({ message: "Valeur incorrect" });
    }
    const astronautes = AstronautesRepository.create(req.body);
    const result = await AstronautesRepository.save(astronautes);
    res.status(200).json(result);

  } catch (err) {
    res.status(500);
    throw 'Message' + err;
  }
});


router.get('/', async (_req: Request, res: Response) => {
  try {
    const astronautes = await AstronautesRepository.find({
      relations: {
        planet: true
      }
    });
    res.status(200).json(astronautes);
  } catch (err) {
    res.status(500);
    throw err;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await AstronautesRepository.find({ where: { id: +req.params.id } });
    res.status(200).json(response);
  } catch (err) {
    res.status(500);
    throw err;
  }
});


router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const astronautes = await AstronautesRepository.update(+req.params.id, req.body);
    res.status(200).json(astronautes);
  } catch (err) {
    res.status(500);
    throw err;
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await AstronautesRepository.delete(+req.params.id);
    res.status(200).send();
  } catch (err) {
    res.status(500);
    throw err;
  }
});



export default router;

import { Router, Request, Response } from "express";
import myDataSource from "../app-data-source.js";
import { Company } from "../entities/company.entity.js";

const router = Router();
const CompaniesRepository = myDataSource.getRepository(Company);

router.get('/navigation', async (_req: Request, res: Response) => {
    try {
        const getCompaniesForNavigation = await CompaniesRepository.find();
        res.status(200).json(getCompaniesForNavigation);
    } catch (err) {
        res.status(500);
    }
});

router.get('/:url', async (req: Request, res: Response) => {
    try {
        const getCompanyAndArticle = await CompaniesRepository.findOne({
            where: { url: req.params.url },
            relations: {
                article: {
                    spaceShips: true
                },
            }
        });

        res.status(200).json(getCompanyAndArticle);
    } catch (err) {
        res.status(500);
    }
});



export default router;
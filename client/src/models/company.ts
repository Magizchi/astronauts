interface SpaceShip {
    id: number;
    name: string;
    image: string;
    info: string;
}

interface Article {
    id: number;
    companyId: number;
    info: string;
    spaceShips: SpaceShip[]
}

export interface Company {
    id: number;
    name: string;
    article: Article
}
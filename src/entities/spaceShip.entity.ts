import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, Relation, ManyToOne } from "typeorm";
import { Article } from "./article.entity.js";

@Entity("spaceShips")
export class spaceShip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ length: 500 })
    info: string;

    @Column()
    image: string;

    @ManyToOne(() => Article, article => article.id)
    @JoinColumn()
    article: Relation<Article>;
}

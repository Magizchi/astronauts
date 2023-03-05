import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, Relation, OneToOne, OneToMany } from "typeorm";
import { Company } from "./company.entity.js";
import { spaceShip } from "./spaceShip.entity.js";

@Entity("articles")
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    info: string;

    @OneToOne(() => Company, company => company.id)
    @JoinColumn()
    company: Relation<Company>;

    @OneToMany(() => spaceShip, spaceShip => spaceShip.article)
    spaceShips: Relation<spaceShip>;
}

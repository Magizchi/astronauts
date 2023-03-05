import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Relation } from "typeorm";
import { Article } from "./article.entity.js";

@Entity("companies")
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @OneToOne(() => Article, article => article.company)
    article: Relation<Article>;
}

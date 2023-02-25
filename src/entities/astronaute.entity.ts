import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, Relation, ManyToOne } from "typeorm";
import { Planets } from "./planet.entity.js";

@Entity()
export class Astronautes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Planets, planet => planet.id, { nullable: true })
    @JoinColumn()
    planet: Relation<Planets>;
}

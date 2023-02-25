import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Relation } from "typeorm";
import { Planets } from "./planet.entity.js";

@Entity()
export class Astronautes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Planets, planet => planet.id, { nullable: true })
    @JoinColumn()
    planet: Relation<Planets>;
}

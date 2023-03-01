import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, Relation, ManyToOne } from "typeorm";
import { Planet } from "./planet.entity.js";

@Entity("astronauts")
export class Astronaut {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Planet, planet => planet.id, { nullable: true })
    @JoinColumn()
    planet: Relation<Planet>;
}

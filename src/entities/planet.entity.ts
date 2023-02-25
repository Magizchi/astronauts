import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Astronautes } from "./astronaute.entity.js";

@Entity()
export class Planets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    image: string;

    @OneToMany(() => Astronautes, atronaut => atronaut.planet)
    astronaut: Astronautes;

}

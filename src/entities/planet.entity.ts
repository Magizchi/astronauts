import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Astronaut } from "./astronaut.entity.js";

@Entity("planets")
export class Planet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    image: string;

    @OneToMany(() => Astronaut, atronaut => atronaut.planet)
    astronaut: Astronaut;

}

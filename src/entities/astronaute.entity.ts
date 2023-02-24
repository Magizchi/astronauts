import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Astronautes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    planet: string;
}

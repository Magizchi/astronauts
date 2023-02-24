import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Planets {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ nullable: true })
    image: string
};

import {Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { View } from "./view";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nombre!: string;
    @Column()
    correo!: string;
    @OneToMany(() => View, (view: View) => view.user)
    views!: View[];
}

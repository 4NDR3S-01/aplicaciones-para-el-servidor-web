import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class View {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    vista!: string;
    @ManyToOne(() => User, (user: User) => user.views)
    user!: User;
}
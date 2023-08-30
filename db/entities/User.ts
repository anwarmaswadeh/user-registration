import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 255, nullable: false })
    userName: string;

    @Column({ nullable: false })
    password: string;
}


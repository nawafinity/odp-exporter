import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Settings {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    key: string

    @Column()
    value: string
}

export default Settings
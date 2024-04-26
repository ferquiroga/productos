import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    nombre: string

    @Column({
        length: 255,
    })
    descripcion: string

    @Column()
    activa: boolean
}

import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne } from "typeorm"
import { Categoria } from "../../categorias/entities/categoria.entity"

export enum Talles {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  EXTRA_LARGE = 'EXTRA_LARGE'
}

@Entity()
@Index(['codigo'], { unique: true })
export class Producto {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 30,
    })
    codigo: string

    @Column({
        length: 100,
    })
    nombre: string

    @Column()
    categoriaId: number

    @Column()
    precio: number

    @Column({
        type: 'enum',
        enum: Talles
      })
    talle: Talles

    @ManyToOne(() => Categoria)
    categoria: Categoria;
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class DataGeneration1714155175413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO categoria (nombre, descripcion, activa) 
        VALUES
         ('Calzado','Calzado',1),
         ('Indumentaria deportiva','Indumentaria deportiva',1),
         ('Pantalones','Pantalones',1),
         ('Camperas','Camperas',0)`);

        await queryRunner.query(`INSERT INTO producto (codigo, nombre, categoriaId, precio, talle) 
        VALUES
         (100, 'Zapatos', 1, 80000, 'MEDIUM'),
         (101, 'Zapatos', 1, 80000, 'LARGE'),
         (102, 'Zapatos', 1, 80000, 'EXTRA_LARGE'),
         (200, 'Remera running', 2, 40000, 'MEDIUM'),
         (201, 'Remera running', 2, 40000, 'LARGE'),
         (202, 'Remera running', 2, 40000, 'EXTRA_LARGE'),
         (300, 'Pantalon de jean', 3, 70000, 'MEDIUM'),
         (301, 'Pantalon de jean', 3, 70000, 'LARGE'),
         (302, 'Pantalon de jean', 3, 70000, 'EXTRA_LARGE'),
         (400, 'Impermeable', 4, 120000, 'MEDIUM'),
         (401, 'Impermeable', 4, 120000, 'LARGE'),
         (402, 'Impermeable', 4, 120000, 'EXTRA_LARGE')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

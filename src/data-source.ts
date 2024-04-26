import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Categoria } from './categorias/entities/categoria.entity';
import { Producto } from './productos/entities/producto.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'productos',
  synchronize: true,
  logging: false,
  entities: [Categoria, Producto],
  migrations: ['src/migration/*.ts'],
  migrationsRun: true,
  subscribers: [],
});

import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { DataSource, Repository } from 'typeorm';
import { Producto, Talles } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectDataSource()
    private dataSource: DataSource
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    return await this.productoRepository.save(createProductoDto);
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    return await this.productoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const toUpdate = await this.productoRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, updateProductoDto);

    return await this.productoRepository.save(updated);
  }

  async remove(id: number) {
    return await this.productoRepository.delete(id);
  }

  /* 
    a) listar los productos, con su respectiva categoria, pero solo de las categorias
       activas. Crear esta consulta utilizando el método find() del repository de la entidad
       Productos
  */
  async listarPorCategoriasActivas() {
     return await this.productoRepository.find(
      {
        relations: {
          categoria: true
        },
        where: { 
          categoria: {
            activa: true
          },
        },
      }
  );
  }

  /*
    b) listar los productos cuyo talle sean MEDIUM o LARGE. Crear esta consulta
       utilizando QueryBuilder.
  */
  async listarPorTalle() {
    return await this.dataSource
    .createQueryBuilder(Producto, 'producto')
    .where('producto.talle IN (:...talles)', { talles: [Talles.MEDIUM, Talles.LARGE] })
    .getMany();
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Producto } from './entities/producto.entity';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}

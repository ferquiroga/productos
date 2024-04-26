import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll() {
    let result = await this.productosService.findAll();
    if (result.length != 0) {
      return result;
    } else {
      return {
        "statusCode": 404,
        "message": "No se encontraron datos"
      }
    }
  }

  @Get('porTalles')
  async listarPorTalle() {
    let result = await this.productosService.listarPorTalle();
    if (result.length != 0) {
      return result;
    } else {
      return {
        "statusCode": 404,
        "message": "No se encontraron datos"
      }
    }
  }

  @Get('porCategoriaActiva')
  async listarPorCategoriasActivas() {
    let result = await this.productosService.listarPorCategoriasActivas();
    if (result.length != 0) {
      return result;
    } else {
      return {
        "statusCode": 404,
        "message": "No se encontraron datos"
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    //return this.productosService.findOne(+id);
    let result = await this.productosService.findOne(+id);
    if (result) {
      return result;
    } else {
      return {
        "statusCode": 404,
        "message": "No se encontraron datos"
      }
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}

import { Talles } from "../entities/producto.entity";
import { MaxLength, IsNotEmpty } from 'class-validator';

export class CreateProductoDto {

    @IsNotEmpty()
    @MaxLength(30)
    public codigo: string;

    @IsNotEmpty()
    @MaxLength(100)
    public nombre: string;
    
    @IsNotEmpty()
    public precio: number;
    
    @IsNotEmpty()
    public talle: Talles;
    
    @IsNotEmpty()
    public categoriaId: number;
}

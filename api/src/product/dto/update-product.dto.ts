import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    example: 'product',
    description: 'Product name',
    format: 'string',
  })
  @IsString()
  @MinLength(3)
  ref?: string;

  @ApiProperty({
    example: 10,
    description: 'Product price',
    format: 'number',
  })
  @Min(0.01)
  @IsNumber({ maxDecimalPlaces: 2 })
  price?: number;
}

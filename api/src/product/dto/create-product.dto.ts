import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'product',
    description: 'Product name',
    format: 'string',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  ref: string;

  @ApiProperty({
    example: 10,
    description: 'Product price',
    format: 'number',
  })
  @IsNotEmpty()
  @Min(0.01)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}

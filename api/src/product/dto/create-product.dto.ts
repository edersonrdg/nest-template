import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Product name',
    description: 'Product name',
    format: 'string',
  })
  ref: string;

  @ApiProperty({
    example: 'Product price',
    description: 'Product price',
    format: 'number',
  })
  price: number;
}

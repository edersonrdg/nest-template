import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'product',
    description: 'Product name',
    format: 'string',
  })
  ref: string;

  @ApiProperty({
    example: 10,
    description: 'Product price',
    format: 'number',
  })
  price: number;
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductRepositoryPrismaDB } from '../product.repository';

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepositoryPrismaDB) {}
  async execute(createProductDto: CreateProductDto) {
    const productExists = await this.productRepository.findByRef(
      createProductDto.ref,
    );

    if (productExists) {
      throw new BadRequestException('Product already exists');
    }

    return await this.productRepository.create(createProductDto);
  }
}

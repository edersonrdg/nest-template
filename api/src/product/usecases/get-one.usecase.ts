import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepositoryPrismaDB } from '../product.repository';

@Injectable()
export class GetOneProductUseCase {
  constructor(private productRepository: ProductRepositoryPrismaDB) {}
  async execute(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }
}

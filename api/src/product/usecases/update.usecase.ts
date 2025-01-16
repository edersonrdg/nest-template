import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepositoryPrismaDB } from '../product.repository';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepositoryPrismaDB) {}
  async execute(id: string, data: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.update(id, data);
  }
}

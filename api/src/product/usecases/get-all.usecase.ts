import { Injectable } from '@nestjs/common';
import { ProductRepositoryPrismaDB } from '../product.repository';

@Injectable()
export class GetAllProductUseCase {
  constructor(private productRepository: ProductRepositoryPrismaDB) {}
  async execute() {
    return await this.productRepository.findAll();
  }
}

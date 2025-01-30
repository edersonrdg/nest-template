import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProductRepositoryPrismaDB } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepositoryPrismaDB) {}

  async create(createProductDto: CreateProductDto) {
    const productExists = await this.productRepository.findByRef(
      createProductDto.ref,
    );

    if (productExists) {
      throw new BadRequestException('Product already exists');
    }

    return await this.productRepository.create(createProductDto);
  }

  async delete(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    await this.productRepository.remove(id);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return await this.productRepository.update(id, updateProductDto);
  }
}

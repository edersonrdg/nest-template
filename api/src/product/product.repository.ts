import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

export interface ProductRepository {
  create(data: CreateProductDto): Promise<Product>;
  findAll(): Promise<Product[]>;
  findByRef(ref: string): Promise<Product>;
  findOne(id: string): Promise<Product>;
  update(id: string, data: UpdateProductDto): Promise<void>;
  remove(id: string): Promise<void>;
}

@Injectable()
export class ProductRepositoryPrismaDB implements ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product> {
    return await this.prismaService.product.create({ data });
  }

  async findAll(): Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  async findByRef(ref: string): Promise<Product> {
    return await this.prismaService.product.findFirst({
      where: { ref },
    });
  }

  async findOne(id: string): Promise<Product> {
    return await this.prismaService.product.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateProductDto): Promise<void> {
    await this.prismaService.product.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prismaService.product.delete({
      where: { id },
    });
  }
}

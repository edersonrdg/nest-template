import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductRepositoryPrismaDB } from './product.repository';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductRepositoryPrismaDB, ProductService],
})
export class ProductModule {}

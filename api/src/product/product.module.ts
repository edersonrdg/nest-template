import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CreateProductUseCase } from './usecases/create-product.usecase';
import { ProductRepositoryPrismaDB } from './product.repository';
import { GetAllProductUseCase } from './usecases/get-all.usecase';
import { GetOneProductUseCase } from './usecases/get-one.usecase';
import { UpdateProductUseCase } from './usecases/update.usecase';
import { DeleteProductUseCase } from './usecases/delete.usecase';

@Module({
  controllers: [ProductController],
  providers: [
    ProductRepositoryPrismaDB,
    CreateProductUseCase,
    GetAllProductUseCase,
    GetOneProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
  ],
})
export class ProductModule {}

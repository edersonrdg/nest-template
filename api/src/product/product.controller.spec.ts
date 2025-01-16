import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { CreateProductUseCase } from './usecases/create-product.usecase';
import { GetAllProductUseCase } from './usecases/get-all.usecase';
import { GetOneProductUseCase } from './usecases/get-one.usecase';
import { UpdateProductUseCase } from './usecases/update.usecase';
import { DeleteProductUseCase } from './usecases/delete.usecase';
import { ProductRepositoryPrismaDB } from './product.repository';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        JwtService,
        PrismaService,
        ProductRepositoryPrismaDB,
        CreateProductUseCase,
        GetAllProductUseCase,
        GetOneProductUseCase,
        UpdateProductUseCase,
        DeleteProductUseCase,
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

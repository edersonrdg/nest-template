import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { UserRepositoryPrismaDB } from './user.repository';
import { PrismaService } from '../prisma/prisma.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [PrismaService, UserRepositoryPrismaDB, CreateUserUseCase],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

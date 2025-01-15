import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { UserRepositoryPrismaDB } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepositoryPrismaDB, CreateUserUseCase],
})
export class UserModule {}

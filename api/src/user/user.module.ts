import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { UserRepositoryPrismaDB } from './user.repository';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    UserRepositoryPrismaDB,
    CreateUserUseCase,
  ],
})
export class UserModule {}

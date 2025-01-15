import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './usecases/create-user.usecase';

@Module({
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}

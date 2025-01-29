import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepositoryPrismaDB } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserRepositoryPrismaDB, UserService],
  exports: [],
})
export class UserModule {}

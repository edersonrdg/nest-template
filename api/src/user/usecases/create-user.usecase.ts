import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepositoryPrismaDB } from '../user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryPrismaDB) {}
  async execute(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }
}

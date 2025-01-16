import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepositoryPrismaDB } from '../user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryPrismaDB) {}
  async execute(createUserDto: CreateUserDto) {
    if (await this.userRepository.getUserByEmail(createUserDto.email)) {
      throw new BadRequestException('Email already used');
    }

    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    return await this.userRepository.create(createUserDto);
  }
}

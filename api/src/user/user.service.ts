import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepositoryPrismaDB } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepositoryPrismaDB) {}

  async signUp(createUserDto: CreateUserDto) {
    if (await this.userRepository.getUserByEmail(createUserDto.email)) {
      throw new BadRequestException('Email already used');
    }

    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    return await this.userRepository.create(createUserDto);
  }
}

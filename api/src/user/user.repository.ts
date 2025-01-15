import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';

export interface UserRepository {
  create(data: CreateUserDto): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
}

@Injectable()
export class UserRepositoryPrismaDB implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    return await this.prismaService.user.create({ data });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.prismaService.user.findFirst({
      where: { email },
    });
  }
}

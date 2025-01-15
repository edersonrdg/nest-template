import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

export interface UserRepository {
  create(data: CreateUserDto): Promise<any>;
}

@Injectable()
export class UserRepositoryPrismaDB implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateUserDto): Promise<any> {
    await this.prismaService.user.create({ data });
  }
}

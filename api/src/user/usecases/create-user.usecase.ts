import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CreateUserUseCase {
  constructor(private prismaService: PrismaService) {}
  async execute(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: createUserDto,
    });
  }
}

import { Module, OnModuleInit } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserRepositoryPrismaDB } from '../user/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [UserRepositoryPrismaDB, AuthService],
})
export class AuthModule implements OnModuleInit {
  constructor(private prismaService: PrismaService) {}

  async onModuleInit() {
    const adminUser = await this.prismaService.user.findFirst({
      where: {
        email: 'admin@user.com',
      },
    });

    if (!adminUser) {
      await this.prismaService.user.create({
        data: {
          email: 'admin@user.com',
          name: 'Admin',
          password: bcrypt.hashSync(process.env.MASTER_KEY, 10),
          role: 'ADMIN',
        },
      });
    }
  }
}

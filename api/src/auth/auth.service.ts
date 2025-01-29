import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepositoryPrismaDB } from '../user/user.repository';
import { SignInDto } from './dto/sign-in.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepositoryPrismaDB,
    private jwtService: JwtService,
  ) {}

  async logIn(signInDto: SignInDto) {
    const user = await this.userRepository.getUserByEmail(signInDto.email);

    if (!user || !bcrypt.compareSync(signInDto.password, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, role: user.role };

    return {
      user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

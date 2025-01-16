import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepositoryPrismaDB } from '../../user/user.repository';
import { SignInDto } from '../dto/sign-in.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInUseCase {
  @Inject()
  private userRepository: UserRepositoryPrismaDB;

  @Inject()
  private jwtService: JwtService;

  async execute(signInDto: SignInDto) {
    const user = await this.userRepository.getUserByEmail(signInDto.email);

    if (!user || !bcrypt.compareSync(signInDto.password, user.password)) {
      // throw new InvalidCredentialsError();
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

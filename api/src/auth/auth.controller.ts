import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SignInUseCase } from './usecases/sign-in.usecase';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  @Inject(SignInUseCase)
  private signInUseCase: SignInUseCase;

  @Post('/sign-in')
  async login(@Body() signInDto: SignInDto) {
    return this.signInUseCase.execute(signInDto);
  }
}

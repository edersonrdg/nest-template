import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from './usecases/create-user.usecase';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }
}

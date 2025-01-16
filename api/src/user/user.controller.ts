import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from './usecases/create-user.usecase';

@Controller('user')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUseCase.execute(createUserDto);
  }
}

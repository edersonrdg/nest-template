import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: 'John Doe',
    description: 'user name',
  })
  @IsString()
  @MinLength(3)
  name?: string;

  @ApiProperty({
    example: 'user@user.com',
    description: 'user email',
    format: 'email',
  })
  @IsEmail()
  @IsString()
  email?: string;
}

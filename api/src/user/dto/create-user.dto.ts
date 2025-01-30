import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/roles/roles.enum';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'user name',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'user@user.com',
    description: 'user email',
    format: 'email',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: '1234567',
    description: 'user password',
    format: 'password',
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: Role.Stock,
    description: 'user role',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}

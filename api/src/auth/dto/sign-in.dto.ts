import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: 'admin@user.com',
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
}

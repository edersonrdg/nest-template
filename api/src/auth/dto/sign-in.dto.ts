import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    example: 'admin@user.com',
    description: 'user email',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    example: '1234567',
    description: 'user password',
    format: 'password',
  })
  password: string;
}

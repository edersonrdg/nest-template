import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/roles/roles.enum';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'user name',
  })
  name: string;

  @ApiProperty({
    example: 'user@user.com',
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

  @ApiProperty({
    example: Role.Stock,
    description: 'user role',
  })
  role: Role;
}

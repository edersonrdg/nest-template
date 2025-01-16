import { Role } from '../../auth/roles/roles.enum';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role: Role;
}

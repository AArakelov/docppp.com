import { UserSexEnum } from '../enums/user-sex.enum';

export interface User {
  firstName: string;
  lastName: string;
  patronymic?: string;
  sex: UserSexEnum;
  phone: string;
  username?: string;
  email: string;
  birthday: Date;
  password: string;
  emailVerified?: boolean;
}

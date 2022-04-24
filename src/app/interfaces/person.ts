import { User } from './user';

export interface Person extends User {
  avatar: string;
  bloodType: string;
  rhesusFactor: string;
  weight: number;
  height: number;
}

import {User} from './user.model';

export interface JWTAuth {
  token: string;
  user: User;
}

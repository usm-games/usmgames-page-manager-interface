
export type UserRoles = 'administrator';

export interface User {
  id: number;
  email: string;
  username: string;
  display_name: string;
  roles: UserRoles[];
}

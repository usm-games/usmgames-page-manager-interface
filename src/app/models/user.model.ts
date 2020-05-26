
export type UserRoles = 'administrator';

export interface User {
  id: number;
  email: string;
  username: string;
  display_name: string;
  roles: UserRoles[];
  meta:{_gamipress_prestigio_points: number};
}

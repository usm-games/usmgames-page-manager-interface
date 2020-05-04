export type UserRole = 'subscriber' | 'administrator';

export interface WpUser {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {[key: number]: string};
  meta: {
    _gamipress_bits_points: number;
  };
  extra_capabilities?: Map<UserRole, boolean>;
}

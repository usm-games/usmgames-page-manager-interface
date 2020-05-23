import {WpChallenge} from './wp/wp-challenge.model';
import {ChallengeRequirement} from './challenge-requirement.model';

export type ChallengeType = 'art2d' | 'programming' | 'music' | 'art3d' | 'gamedev';

export interface Challenge {
  id: number;
  wp?: WpChallenge;
  type: ChallengeType;
  title: string;
  description: string;
  requirements: string[] | ChallengeRequirement[];
  notify?: boolean;
  published: string;
  submitted_to: null | number;
}

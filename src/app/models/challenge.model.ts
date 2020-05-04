import {WpChallenge} from './wp/wp-challenge.model';
import {ChallengeRequirement} from './challenge-requirement.model';

export type ChallengeType = 'art' | 'programming' | 'music';

export interface Challenge {
  id: number;
  wp?: WpChallenge;
  type: ChallengeType;
  title: string;
  description: string;
  requirements: string[] | ChallengeRequirement[];
  notify?: boolean;
}

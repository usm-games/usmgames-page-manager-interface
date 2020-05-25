import {Submission} from './submission.model';

export interface Evaluation {
  approved: boolean;
  comment: string;
}


export interface APISubmission {
  id: number;
  submitted: Date;
  submission: Submission;
  challenge_id: number;
  user_id: number;
  evaluation: Evaluation | null;
}

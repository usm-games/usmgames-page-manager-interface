import {Injectable} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {PageMangerService} from './page-manger.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {map} from 'rxjs/operators';
import {APISubmission} from '../../models/api-submission.model';

export interface GetSubmissionOptions {
  notEvaluated?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {
  constructor(private pm: PageMangerService) {
  }

  private static _parseAPISubmission(sub: any): APISubmission {
    sub.submitted = Date.parse(sub.submitted as string);
    return sub as APISubmission;
  }

  get(user: User, challenge: Challenge): Observable<APISubmission> {
    return this.pm.get(`challenges/${challenge.id}/submissions/${user.id}`)
      .pipe(map(SubmissionsService._parseAPISubmission));
  }

  getFromUser(user: User, options: GetSubmissionOptions = {}): Observable<APISubmission[]> {
    const params: any = {};
    if (options.notEvaluated)
      params.not_evaluated = options.notEvaluated;
    return this.pm.get(`users/${user.id}/submissions`, params)
      .pipe(map((subs: any[]) => subs.map(SubmissionsService._parseAPISubmission)));
  }

  getFromChallenge(challenge: Challenge, options: GetSubmissionOptions = {}): Observable<APISubmission[]> {
    const params: any = {};
    if (options.notEvaluated)
      params.not_evaluated = options.notEvaluated;
    return this.pm.get(`challenges/${challenge.id}/submissions`, params)
      .pipe(map((subs: any[]) => subs.map(SubmissionsService._parseAPISubmission)));
  }

  approve(submission: APISubmission, comment: string, points: number) {
    return this.pm.post(`challenges/${submission.challenge_id}/submissions/${submission.user_id}/evaluate`,
      {approved: true, comment, points});
  }

  reject(submission: APISubmission, comment: string) {
    return this.pm.post(`challenges/${submission.challenge_id}/submissions/${submission.user_id}/evaluate`,
      {approved: false, comment, points: 0});
  }
}

import { Injectable } from '@angular/core';
import {Challenge, ChallengeType} from '../../models/challenge.model';
import {PageMangerService} from './page-manger.service';
import {Observable} from 'rxjs';
import {Submission} from '../../models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public readonly types: {name: string, slug: ChallengeType, emoji: string}[] = [
    {slug: 'art', name: 'Desafío de Arte y Animación', emoji: '🎨'},
    {slug: 'programming', name: 'Desafío de Programación', emoji: '💻'},
    {slug: 'music', name: 'Desafío de Música', emoji: '🎶'}
  ];

  constructor(private pm: PageMangerService) { }

  create(challenge: Challenge): Promise<Challenge> {
    challenge.notify = false;
    return this.pm.post('challenges', challenge);
  }

  submit(submission: Submission, challenge: Challenge): Promise<Submission> {
    console.log(submission);
    return this.pm.post(`challenges/${challenge.id}/submissions`, submission);
  }

  getAll(): Observable<Challenge[]> {
    return this.pm.get('challenges');
  }
}

import { Injectable } from '@angular/core';
import {Challenge, ChallengeType} from '../../models/challenge.model';
import {PageMangerService} from './page-manger.service';
import {Observable} from 'rxjs';
import {Submission} from '../../models/submission.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public readonly types: {name: string, slug: ChallengeType, emoji: string}[] = [
    {slug: 'art', name: 'Desafío de Arte 2D', emoji: '🎨'},
    {slug: 'programming', name: 'Desafío de Programación', emoji: '💻'},
    {slug: 'music', name: 'Desafío de Música', emoji: '🎶'},
    {slug: 'modeling', name: 'Desafío de Arte 3D', emoji: '🎲'},
    {slug: 'gamedev', name: 'Desafío de Desarrollo', emoji: '🎮'}
  ];

  constructor(private pm: PageMangerService) { }

  create(challenge: Challenge): Promise<Challenge> {
    challenge.notify = environment.production;
    return this.pm.post('challenges', challenge);
  }

  submit(submission: Submission, challenge: Challenge): Promise<Submission> {
    return this.pm.post(`challenges/${challenge.id}/submissions`, submission);
  }

  getAll(): Observable<Challenge[]> {
    return this.pm.get('challenges');
  }
}

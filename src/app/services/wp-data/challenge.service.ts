import { Injectable } from '@angular/core';
import {Challenge, ChallengeType} from '../../models/challenge.model';
import {PageMangerService} from './page-manger.service';
import {Observable} from 'rxjs';
import {Submission} from '../../models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public readonly types: {name: string, slug: ChallengeType, emoji: string, defaultScore: number}[] = [
    {slug: 'art2d', name: 'Desafío de Arte 2D', emoji: '🎨', defaultScore: 10},
    {slug: 'programming', name: 'Desafío de Programación', emoji: '💻', defaultScore: 10},
    {slug: 'music', name: 'Desafío de Música', emoji: '🎶', defaultScore: 10},
    {slug: 'art3d', name: 'Desafío de Arte 3D', emoji: '🎲', defaultScore: 10},
    {slug: 'gamedev', name: 'Desafío de Desarrollo', emoji: '🎮', defaultScore: 20}
  ];

  public get typeBySlug(): Record<ChallengeType, {name: string, emoji: string, defaultScore: number}>  {
    const types: any = {};
    this.types.forEach(elem => {
      types[elem.slug] = {
        name: elem.name,
        emoji: elem.emoji,
        defaultScore: elem.defaultScore
      };
    });
    return types as Record<ChallengeType, {name: string, emoji: string, defaultScore: number}> ;
  }

  constructor(private pm: PageMangerService) { }

  create(challenge: Challenge): Promise<Challenge> {
    challenge.notify = true;
    return this.pm.post('challenges', challenge);
  }

  submit(submission: Submission, challenge: Challenge): Promise<Submission> {
    return this.pm.post(`challenges/${challenge.id}/submissions`, submission);
  }

  getAll(): Observable<Challenge[]> {
    return this.pm.get('challenges');
  }
}

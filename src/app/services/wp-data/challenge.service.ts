import { Injectable } from '@angular/core';
import {Challenge, ChallengeType} from '../../models/challenge.model';
import {PageMangerService} from './page-manger.service';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  public readonly types: {name: string, slug: ChallengeType}[] = [
    {slug: 'art', name: 'Desafío de Arte y Animación'},
    {slug: 'programming', name: 'Desafío de Programación'},
    {slug: 'music', name: 'Desafío de Música'}
  ];

  constructor(private pm: PageMangerService) { }

  create(challenge: Challenge): Promise<Challenge> {
    challenge.notify = false;
    return this.pm.post('challenges', challenge);
  }
}

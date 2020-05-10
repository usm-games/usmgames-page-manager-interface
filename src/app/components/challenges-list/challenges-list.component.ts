import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge, ChallengeType} from '../../models/challenge.model';
import {ChallengeService} from '../../services/wp-data/challenge.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
  @Input() interactive = false;
  @Output() selected = new EventEmitter<Challenge>();

  challenges$: Observable<Challenge[]>;
  challengeTypes: {name: string, slug: ChallengeType, emoji: string}[];

  selectedType: {name: string, slug: ChallengeType, emoji: string};

  constructor(private challenges: ChallengeService) { }

  ngOnInit(): void {
    this.challenges$ = this.challenges.getAll();
    this.challengeTypes = this.challenges.types;
    this.selectedType = this.challengeTypes[0];
  }

  filterByType(type: string, challenges: Challenge[]) {
    return challenges.filter(challenge => challenge.type === type);
  }

  selectChallenge(challenge: Challenge) {
    this.selected.emit(challenge);
  }
}

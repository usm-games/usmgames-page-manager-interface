import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge.model';

@Component({
  selector: 'app-challenge-list-group',
  templateUrl: './challenge-list-group.component.html',
  styleUrls: ['./challenge-list-group.component.css']
})
export class ChallengeListGroupComponent implements OnInit {
  @Input() challenges!: Challenge[];
  @Output() selected = new EventEmitter<Challenge>();

  constructor() { }

  ngOnInit(): void {}

  select(challenge: Challenge) {
    this.selected.emit(challenge);
  }
}

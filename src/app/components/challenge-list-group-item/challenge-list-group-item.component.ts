import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge.model';

@Component({
  selector: 'app-challenge-list-group-item',
  templateUrl: './challenge-list-group-item.component.html',
  styleUrls: ['./challenge-list-group-item.component.css']
})
export class ChallengeListGroupItemComponent implements OnInit {
  @Input() public challenge: Challenge;
  @Output() public selected = new EventEmitter<Challenge>();

  public expand = false;

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selected.emit(this.challenge);
  }

  get published() {
    return new Date(this.challenge.published);
  }
}

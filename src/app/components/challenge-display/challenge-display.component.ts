import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {Evidence} from '../../models/evidence.model';

@Component({
  selector: 'app-challenge-display',
  templateUrl: './challenge-display.component.html',
  styleUrls: ['./challenge-display.component.css']
})
export class ChallengeDisplayComponent implements OnInit {
  @Input() challenge!: Challenge;
  @Input() evidences!: Evidence[];

  constructor() { }

  ngOnInit(): void {}

  get published() {
    return new Date(this.challenge.published);
  }

  isValidURL(url: string) {
    const urlReg = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return url.match(urlReg);
  }

  isValid(evidence: Evidence) {
    return evidence.description !== '' && evidence.url !== '' && this.isValidURL(evidence.url);
  }
}

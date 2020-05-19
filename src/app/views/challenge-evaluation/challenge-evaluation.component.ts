import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {APISubmission} from '../../models/api-submission.model';

@Component({
  selector: 'app-challenge-evaluation',
  templateUrl: './challenge-evaluation.component.html',
  styleUrls: ['./challenge-evaluation.component.css']
})
export class ChallengeEvaluationComponent implements OnInit {
  @Input() challenge: Challenge;
  @Input() submission: APISubmission;
  @Output() submitted = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

  goBack() {
    if (this.submission) {
      this.submission = null;
      return;
    }
    if (this.challenge) {
      this.challenge = null;
    }
  }
}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {APISubmission} from '../../models/api-submission.model';
import {SubmissionsService} from '../../services/wp-data/submissions.service';
import {ChallengeService} from '../../services/wp-data/challenge.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit, OnChanges {
  @Input() challenge: Challenge = null;
  @Input() submission: APISubmission = null;

  @Output() evaluated = new EventEmitter();

  comment = '';
  loading = false;
  baseScore = 0;
  bonusScore = 0;

  constructor(
    private challenges: ChallengeService,
    private submissions: SubmissionsService) { }

  ngOnInit(): void {
    this.updateScore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.challenge)
      this.updateScore();
  }

  get totalScore() {
    return this.baseScore + this.bonusScore;
  }

  updateScore() {
    if (this.challenge) {
      this.baseScore = this.challenges.typeBySlug[this.challenge.type].defaultScore;
    } else {
      this.baseScore = 0;
    }
  }

  approve() {
    this.loading = true;
    this.submissions.approve(this.submission, this.comment, this.totalScore)
      .then(() => this.evaluated.emit())
      .catch(() => this.loading = false);
  }

  reject() {
    this.loading = true;
    return this.submissions.reject(this.submission, this.comment)
      .then(() => this.evaluated.emit());
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {APISubmission} from '../../models/api-submission.model';
import {SubmissionsService} from '../../services/wp-data/submissions.service';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {
  @Input() challenge: Challenge = null;
  @Input() submission: APISubmission = null;

  @Output() evaluated = new EventEmitter();

  comment = '';
  loading = false;

  constructor(private submissions: SubmissionsService) { }

  ngOnInit(): void {
  }

  approve() {
    this.loading = true;
    this.submissions.approve(this.submission, this.comment)
      .then(() => this.evaluated.emit())
      .catch(() => this.loading = false);
  }

  reject() {
    this.loading = true;
    return this.submissions.reject(this.submission, this.comment)
      .then(() => this.evaluated.emit());
  }
}

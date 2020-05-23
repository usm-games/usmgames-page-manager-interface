import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Challenge} from '../../models/challenge.model';
import {GetSubmissionOptions, SubmissionsService} from '../../services/wp-data/submissions.service';
import {Observable} from 'rxjs';
import {APISubmission} from '../../models/api-submission.model';

@Component({
  selector: 'app-submission-list-group',
  templateUrl: './submission-list-group.component.html',
  styleUrls: ['./submission-list-group.component.css']
})
export class SubmissionListGroupComponent implements OnInit, OnChanges {
  @Input() challenge: Challenge;
  @Output() selected = new EventEmitter<APISubmission>();

  filters: Record<string, {name: string, options: GetSubmissionOptions}> = {
    pending: {name: 'Pendientes', options: {notEvaluated: true}},
    all: {name: 'Todo', options: {}},
  };
  filtersItems = Object.entries(this.filters);
  filterCode = 'pending';

  submissions$: Observable<APISubmission[]>;

  constructor(private submissions: SubmissionsService) { }

  onChallengeUpdate(challenge: Challenge) {
    const options = this.filters[this.filterCode].options;
    this.submissions$ = this.submissions.getFromChallenge(challenge, options);
  }

  ngOnInit(): void {
    this.onChallengeUpdate(this.challenge);
  }

  set activeFilter(code: string) {
    this.filterCode = code;

    const options = this.filters[this.filterCode].options;
    this.submissions$ = this.submissions.getFromChallenge(this.challenge, options);
  }

  get activeFilter() {
    return this.filterCode;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.challenge) {
      const challenge: Challenge = changes.challenge.currentValue as Challenge;
      this.onChallengeUpdate(challenge);
      return;
    }
  }

  select(submission: APISubmission) {
    this.selected.emit(submission);
  }
}

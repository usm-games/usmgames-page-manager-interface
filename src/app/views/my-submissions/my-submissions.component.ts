import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {APISubmission} from '../../models/api-submission.model';
import {from, Observable} from 'rxjs';
import {SubmissionsService} from '../../services/wp-data/submissions.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.component.html',
  styleUrls: ['./my-submissions.component.css']
})
export class MySubmissionsComponent implements OnInit, OnChanges {
  @Input() user?: User;
  submissions$: Observable<APISubmission[]>;
  selectedSubmission: APISubmission | null = null;

  constructor(
    private submissions: SubmissionsService
  ) { }

  ngOnInit(): void {
    this.updateSubmissions();
  }

  updateSubmissions() {
    if (this.user) {
      this.submissions$ = this.submissions.getFromUser(this.user);
    } else {
      this.submissions$ = from(Promise.resolve(null));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user) {
      this.updateSubmissions();
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {APISubmission} from '../../models/api-submission.model';

@Component({
  selector: 'app-submission-display',
  templateUrl: './submission-display.component.html',
  styleUrls: ['./submission-display.component.css']
})
export class SubmissionDisplayComponent implements OnInit {
  @Input() submission: APISubmission;

  constructor() { }

  ngOnInit(): void {
  }
}

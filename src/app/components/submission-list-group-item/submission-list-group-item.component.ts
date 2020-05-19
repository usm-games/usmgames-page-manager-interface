import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {APISubmission} from '../../models/api-submission.model';

@Component({
  selector: 'app-submission-list-group-item',
  templateUrl: './submission-list-group-item.component.html',
  styleUrls: ['./submission-list-group-item.component.css']
})
export class SubmissionListGroupItemComponent implements OnInit {
  @Input() submission: APISubmission;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selected.emit();
  }
}

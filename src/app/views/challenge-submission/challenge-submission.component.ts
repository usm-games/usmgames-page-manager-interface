import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Challenge} from '../../models/challenge.model';

@Component({
  selector: 'app-challenge-submission',
  templateUrl: './challenge-submission.component.html',
  styleUrls: ['./challenge-submission.component.css']
})
export class ChallengeSubmissionComponent implements OnInit {
  @Output() submitted = new EventEmitter<void>();

  challenge: Challenge;
  ngOnInit(): void {}
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChallengeService} from '../../services/wp-data/challenge.service';
import {Challenge} from '../../models/challenge.model';
import {Evidence} from '../../models/evidence.model';

@Component({
  selector: 'app-challenge-submission-form',
  templateUrl: './challenge-submission-form.component.html',
  styleUrls: ['./challenge-submission-form.component.css']
})
export class ChallengeSubmissionFormComponent implements OnInit {
  @Input() challenge!: Challenge;
  @Output() submitted = new EventEmitter();

  shownEvidenceIdx = 0;

  loading = false;
  submissionForm: FormGroup;
  types = this.challenges.types;

  constructor(private challenges: ChallengeService) {}

  ngOnInit(): void {
    this.submissionForm = new FormGroup({
      comment: new FormControl('', [
        Validators.maxLength(255)
      ]),
      evidence: new FormArray([])
    });
    this.addEvidence();
    this.addEvidence();
  }

  get comment(): FormControl {
    return this.submissionForm.get('comment') as FormControl;
  }

  get evidences(): FormArray {
    return this.submissionForm.get('evidence') as FormArray;
  }

  get parsedEvidences(): Evidence[] {
    return this.evidences.value;
  }

  get description(): FormControl {
    return this.evidences.at(this.shownEvidenceIdx).get('description') as FormControl;
  }

  get url(): FormControl {
    return this.evidences.at(this.shownEvidenceIdx).get('url') as FormControl;
  }

  get rangeEvidence() {
    return [...Array(this.evidences.length).keys()];
  }

  addEvidence() {
    const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    const group = new FormGroup({
      description: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required, Validators.pattern(urlReg)])
    });
    this.evidences.push(group);
    this.shownEvidenceIdx++;
    this.showPreviousEvidence();
  }

  removeEvidence() {
    this.evidences.removeAt(this.evidences.length - 1);
    this.shownEvidenceIdx--;
    this.showNextEvidence();
  }

  submit() {
    this.loading = true;
    return this.challenges.submit(this.submissionForm.value, this.challenge)
      .then(() => this.submitted.emit())
      .catch(() => this.loading = false);
  }

  showPreviousEvidence() {
    this.shownEvidenceIdx = Math.max(this.shownEvidenceIdx - 1, 0);
  }

  showNextEvidence() {
    this.shownEvidenceIdx = Math.min(this.shownEvidenceIdx + 1, this.evidences.length - 1);
  }
}

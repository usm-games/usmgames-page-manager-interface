import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ChallengeService} from '../../services/wp-data/challenge.service';

@Component({
  selector: 'app-challenge-create-form',
  templateUrl: './challenge-create-form.component.html',
  styleUrls: ['./challenge-create-form.component.css']
})
export class ChallengeCreateFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  loading = false;
  challengeForm: FormGroup;
  types = this.challenges.types;

  constructor(private challenges: ChallengeService) {}

  ngOnInit(): void {
    this.challengeForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      type: new FormControl(this.challenges.types[0].slug, [
        Validators.required
      ]),
      requirements: new FormArray([])
    });
    this.addRequirement();
    this.addRequirement();
  }

  get title(): FormControl {
    return this.challengeForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.challengeForm.get('description') as FormControl;
  }

  get type(): FormControl {
    return this.challengeForm.get('type') as FormControl;
  }

  get requirements(): FormArray {
    return this.challengeForm.get('requirements') as FormArray;
  }

  addRequirement() {
    this.requirements.push(new FormControl('', Validators.required));
  }

  removeRequirement(idx: number) {
    this.requirements.removeAt(idx);
  }

  submit() {
    const challenge = this.challengeForm.value;
    this.loading = true;
    return this.challenges.create(challenge)
      .then(() => this.submitted.emit())
      .catch((e) => {
        console.error(e);
        this.loading = false;
      });
  }
}

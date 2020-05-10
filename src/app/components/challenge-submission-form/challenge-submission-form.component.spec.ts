import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeSubmissionFormComponent } from './challenge-submission-form.component';

describe('ChallengeSubmissionFormComponent', () => {
  let component: ChallengeSubmissionFormComponent;
  let fixture: ComponentFixture<ChallengeSubmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeSubmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

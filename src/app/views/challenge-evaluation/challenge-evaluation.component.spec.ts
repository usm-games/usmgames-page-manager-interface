import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeEvaluationComponent } from './challenge-evaluation.component';

describe('ChallengeEvaluationComponent', () => {
  let component: ChallengeEvaluationComponent;
  let fixture: ComponentFixture<ChallengeEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

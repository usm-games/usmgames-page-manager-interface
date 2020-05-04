import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCreateFormComponent } from './challenge-create-form.component';

describe('ChallengeCreateFormComponent', () => {
  let component: ChallengeCreateFormComponent;
  let fixture: ComponentFixture<ChallengeCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

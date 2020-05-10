import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListGroupComponent } from './challenge-list-group.component';

describe('ChallengeListGroupComponent', () => {
  let component: ChallengeListGroupComponent;
  let fixture: ComponentFixture<ChallengeListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

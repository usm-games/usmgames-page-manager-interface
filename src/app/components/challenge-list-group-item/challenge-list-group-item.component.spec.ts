import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeListGroupItemComponent } from './challenge-list-group-item.component';

describe('ChallengeListGroupItemComponent', () => {
  let component: ChallengeListGroupItemComponent;
  let fixture: ComponentFixture<ChallengeListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

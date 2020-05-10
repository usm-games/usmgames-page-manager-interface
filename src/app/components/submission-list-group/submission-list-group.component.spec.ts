import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListGroupComponent } from './submission-list-group.component';

describe('SubmissionListGroupComponent', () => {
  let component: SubmissionListGroupComponent;
  let fixture: ComponentFixture<SubmissionListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

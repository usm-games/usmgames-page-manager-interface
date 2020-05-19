import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionListGroupItemComponent } from './submission-list-group-item.component';

describe('SubmissionListGroupItemComponent', () => {
  let component: SubmissionListGroupItemComponent;
  let fixture: ComponentFixture<SubmissionListGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionListGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionListGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

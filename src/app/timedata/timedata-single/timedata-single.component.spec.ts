import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedataSingleComponent } from './timedata-single.component';

describe('TimedataSingleComponent', () => {
  let component: TimedataSingleComponent;
  let fixture: ComponentFixture<TimedataSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedataSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedataSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

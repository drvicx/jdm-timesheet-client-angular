import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgdataSingleComponent } from './orgdata-single.component';

describe('OrgdataSingleComponent', () => {
  let component: OrgdataSingleComponent;
  let fixture: ComponentFixture<OrgdataSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgdataSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgdataSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

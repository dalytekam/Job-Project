import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobErrorComponent } from './job-error.component';

describe('JobErrorComponent', () => {
  let component: JobErrorComponent;
  let fixture: ComponentFixture<JobErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

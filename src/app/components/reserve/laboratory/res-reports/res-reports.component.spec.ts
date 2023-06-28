import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResReportsComponent } from './res-reports.component';

describe('ResReportsComponent', () => {
  let component: ResReportsComponent;
  let fixture: ComponentFixture<ResReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResReportsComponent]
    });
    fixture = TestBed.createComponent(ResReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResLaboratoryComponent } from './res-laboratory.component';

describe('ResLaboratoryComponent', () => {
  let component: ResLaboratoryComponent;
  let fixture: ComponentFixture<ResLaboratoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResLaboratoryComponent]
    });
    fixture = TestBed.createComponent(ResLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResLaboratoryAddComponent } from './res-laboratory-add.component';

describe('ResLaboratoryAddComponent', () => {
  let component: ResLaboratoryAddComponent;
  let fixture: ComponentFixture<ResLaboratoryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResLaboratoryAddComponent]
    });
    fixture = TestBed.createComponent(ResLaboratoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

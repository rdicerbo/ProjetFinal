import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAssocieParticipantComponent } from './formation-associe-participant.component';

describe('FormationAssocieParticipantComponent', () => {
  let component: FormationAssocieParticipantComponent;
  let fixture: ComponentFixture<FormationAssocieParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationAssocieParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationAssocieParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

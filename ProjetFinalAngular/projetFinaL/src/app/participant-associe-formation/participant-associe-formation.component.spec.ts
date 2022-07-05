import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAssocieFormationComponent } from './participant-associe-formation.component';

describe('ParticipantAssocieFormationComponent', () => {
  let component: ParticipantAssocieFormationComponent;
  let fixture: ComponentFixture<ParticipantAssocieFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantAssocieFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantAssocieFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

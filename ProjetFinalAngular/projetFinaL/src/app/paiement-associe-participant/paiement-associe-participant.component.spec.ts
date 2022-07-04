import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementAssocieParticipantComponent } from './paiement-associe-participant.component';

describe('PaiementAssocieParticipantComponent', () => {
  let component: PaiementAssocieParticipantComponent;
  let fixture: ComponentFixture<PaiementAssocieParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementAssocieParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementAssocieParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

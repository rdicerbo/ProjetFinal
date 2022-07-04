import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelanceAssocieParticipantComponent } from './relance-associe-participant.component';

describe('RelanceAssocieParticipantComponent', () => {
  let component: RelanceAssocieParticipantComponent;
  let fixture: ComponentFixture<RelanceAssocieParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelanceAssocieParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelanceAssocieParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

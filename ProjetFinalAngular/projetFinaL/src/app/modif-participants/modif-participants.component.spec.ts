import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifParticipantsComponent } from './modif-participants.component';

describe('ModifParticipantsComponent', () => {
  let component: ModifParticipantsComponent;
  let fixture: ComponentFixture<ModifParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifParticipantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

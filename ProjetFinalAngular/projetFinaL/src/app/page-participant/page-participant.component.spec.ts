import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParticipantComponent } from './page-participant.component';

describe('PageParticipantComponent', () => {
  let component: PageParticipantComponent;
  let fixture: ComponentFixture<PageParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAssistantsComponent } from './liste-assistants.component';

describe('ListeAssistantsComponent', () => {
  let component: ListeAssistantsComponent;
  let fixture: ComponentFixture<ListeAssistantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAssistantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

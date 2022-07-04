import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAssistantsComponent } from './modif-assistants.component';

describe('ModifAssistantsComponent', () => {
  let component: ModifAssistantsComponent;
  let fixture: ComponentFixture<ModifAssistantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAssistantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAssistantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

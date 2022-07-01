import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurAssocieComponent } from './formateur-associe.component';

describe('FormateurAssocieComponent', () => {
  let component: FormateurAssocieComponent;
  let fixture: ComponentFixture<FormateurAssocieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurAssocieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurAssocieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

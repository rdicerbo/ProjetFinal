import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAssocieeComponent } from './formation-associee.component';

describe('FormationAssocieeComponent', () => {
  let component: FormationAssocieeComponent;
  let fixture: ComponentFixture<FormationAssocieeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationAssocieeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationAssocieeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormateursComponent } from './add-formateurs.component';

describe('AddFormateursComponent', () => {
  let component: AddFormateursComponent;
  let fixture: ComponentFixture<AddFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAssocieComponent } from './contact-associe.component';

describe('ContactAssocieComponent', () => {
  let component: ContactAssocieComponent;
  let fixture: ComponentFixture<ContactAssocieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAssocieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAssocieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

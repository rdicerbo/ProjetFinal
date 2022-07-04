import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAssociesComponent } from './contacts-associes.component';

describe('ContactsAssociesComponent', () => {
  let component: ContactsAssociesComponent;
  let fixture: ComponentFixture<ContactsAssociesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsAssociesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsAssociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

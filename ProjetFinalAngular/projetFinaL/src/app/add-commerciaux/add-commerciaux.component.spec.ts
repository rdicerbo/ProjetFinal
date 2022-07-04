import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommerciauxComponent } from './add-commerciaux.component';

describe('AddCommerciauxComponent', () => {
  let component: AddCommerciauxComponent;
  let fixture: ComponentFixture<AddCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

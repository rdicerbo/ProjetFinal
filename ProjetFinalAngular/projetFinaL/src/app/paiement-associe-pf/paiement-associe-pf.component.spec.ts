import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementAssociePFComponent } from './paiement-associe-pf.component';

describe('PaiementAssociePFComponent', () => {
  let component: PaiementAssociePFComponent;
  let fixture: ComponentFixture<PaiementAssociePFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementAssociePFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementAssociePFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

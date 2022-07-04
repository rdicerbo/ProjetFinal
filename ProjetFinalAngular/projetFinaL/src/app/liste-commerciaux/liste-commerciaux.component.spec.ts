import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommerciauxComponent } from './liste-commerciaux.component';

describe('ListeCommerciauxComponent', () => {
  let component: ListeCommerciauxComponent;
  let fixture: ComponentFixture<ListeCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProspectsComponent } from './liste-prospects.component';

describe('ListeProspectsComponent', () => {
  let component: ListeProspectsComponent;
  let fixture: ComponentFixture<ListeProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

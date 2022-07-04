import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProspectsComponent } from './modif-prospects.component';

describe('ModifProspectsComponent', () => {
  let component: ModifProspectsComponent;
  let fixture: ComponentFixture<ModifProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProspectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

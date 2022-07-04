import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCommerciauxComponent } from './modif-commerciaux.component';

describe('ModifCommerciauxComponent', () => {
  let component: ModifCommerciauxComponent;
  let fixture: ComponentFixture<ModifCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

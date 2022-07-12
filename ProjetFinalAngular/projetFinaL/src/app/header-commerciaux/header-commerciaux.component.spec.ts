import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommerciauxComponent } from './header-commerciaux.component';

describe('HeaderCommerciauxComponent', () => {
  let component: HeaderCommerciauxComponent;
  let fixture: ComponentFixture<HeaderCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

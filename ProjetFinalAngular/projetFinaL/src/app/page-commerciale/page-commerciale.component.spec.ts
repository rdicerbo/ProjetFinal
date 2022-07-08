import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommercialeComponent } from './page-commerciale.component';

describe('PageCommercialeComponent', () => {
  let component: PageCommercialeComponent;
  let fixture: ComponentFixture<PageCommercialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommercialeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCommercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

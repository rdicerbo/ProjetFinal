import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormateurComponent } from './page-formateur.component';

describe('PageFormateurComponent', () => {
  let component: PageFormateurComponent;
  let fixture: ComponentFixture<PageFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

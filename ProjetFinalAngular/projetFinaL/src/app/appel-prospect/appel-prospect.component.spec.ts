import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelProspectComponent } from './appel-prospect.component';

describe('AppelProspectComponent', () => {
  let component: AppelProspectComponent;
  let fixture: ComponentFixture<AppelProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

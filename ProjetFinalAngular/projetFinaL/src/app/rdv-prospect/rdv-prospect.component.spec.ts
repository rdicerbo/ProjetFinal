import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvProspectComponent } from './rdv-prospect.component';

describe('RdvProspectComponent', () => {
  let component: RdvProspectComponent;
  let fixture: ComponentFixture<RdvProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

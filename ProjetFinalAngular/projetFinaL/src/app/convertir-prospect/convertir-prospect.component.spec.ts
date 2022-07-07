import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirProspectComponent } from './convertir-prospect.component';

describe('ConvertirProspectComponent', () => {
  let component: ConvertirProspectComponent;
  let fixture: ComponentFixture<ConvertirProspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertirProspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertirProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

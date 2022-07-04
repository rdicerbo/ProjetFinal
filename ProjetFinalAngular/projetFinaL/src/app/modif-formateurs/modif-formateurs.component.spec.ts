import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormateursComponent } from './modif-formateurs.component';

describe('ModifFormateursComponent', () => {
  let component: ModifFormateursComponent;
  let fixture: ComponentFixture<ModifFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFormateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

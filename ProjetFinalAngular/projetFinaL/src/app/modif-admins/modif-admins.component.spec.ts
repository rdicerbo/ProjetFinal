import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdminsComponent } from './modif-admins.component';

describe('ModifAdminsComponent', () => {
  let component: ModifAdminsComponent;
  let fixture: ComponentFixture<ModifAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

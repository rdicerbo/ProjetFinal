import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPasswordComponent } from './modif-password.component';

describe('ModifPasswordComponent', () => {
  let component: ModifPasswordComponent;
  let fixture: ComponentFixture<ModifPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

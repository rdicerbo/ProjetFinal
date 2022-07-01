import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormationsComponent } from './modif-formations.component';

describe('ModifFormationsComponent', () => {
  let component: ModifFormationsComponent;
  let fixture: ComponentFixture<ModifFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

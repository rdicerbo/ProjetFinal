import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelanceAssociePFComponent } from './relance-associe-pf.component';

describe('RelanceAssociePFComponent', () => {
  let component: RelanceAssociePFComponent;
  let fixture: ComponentFixture<RelanceAssociePFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelanceAssociePFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelanceAssociePFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

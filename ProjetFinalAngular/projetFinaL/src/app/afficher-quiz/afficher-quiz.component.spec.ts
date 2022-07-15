import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherQuizComponent } from './afficher-quiz.component';

describe('AfficherQuizComponent', () => {
  let component: AfficherQuizComponent;
  let fixture: ComponentFixture<AfficherQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

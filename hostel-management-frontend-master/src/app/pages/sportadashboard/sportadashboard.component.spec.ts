import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportadashboardComponent } from './sportadashboard.component';

describe('SportadashboardComponent', () => {
  let component: SportadashboardComponent;
  let fixture: ComponentFixture<SportadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportadashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

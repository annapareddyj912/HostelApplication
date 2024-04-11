import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportgrantComponent } from './sportgrant.component';

describe('SportgrantComponent', () => {
  let component: SportgrantComponent;
  let fixture: ComponentFixture<SportgrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportgrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportgrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

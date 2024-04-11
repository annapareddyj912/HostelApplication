import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoccupiedComponent } from './isoccupied.component';

describe('IsoccupiedComponent', () => {
  let component: IsoccupiedComponent;
  let fixture: ComponentFixture<IsoccupiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoccupiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoccupiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

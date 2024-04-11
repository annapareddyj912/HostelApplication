import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportudashComponent } from './sportudash.component';

describe('SportudashComponent', () => {
  let component: SportudashComponent;
  let fixture: ComponentFixture<SportudashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportudashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportudashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportuformComponent } from './sportuform.component';

describe('SportuformComponent', () => {
  let component: SportuformComponent;
  let fixture: ComponentFixture<SportuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportuformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

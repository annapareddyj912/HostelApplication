import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatefeesComponent } from './calculatefees.component';

describe('CalculatefeesComponent', () => {
  let component: CalculatefeesComponent;
  let fixture: ComponentFixture<CalculatefeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatefeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatefeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

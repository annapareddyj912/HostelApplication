import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacateroomComponent } from './vacateroom.component';

describe('VacateroomComponent', () => {
  let component: VacateroomComponent;
  let fixture: ComponentFixture<VacateroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacateroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

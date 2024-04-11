import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsUserHomeComponent } from './sports-user-home.component';

describe('SportsUserHomeComponent', () => {
  let component: SportsUserHomeComponent;
  let fixture: ComponentFixture<SportsUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

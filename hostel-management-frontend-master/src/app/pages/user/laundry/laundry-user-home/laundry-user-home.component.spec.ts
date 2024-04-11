import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryUserHomeComponent } from './laundry-user-home.component';

describe('LaundryUserHomeComponent', () => {
  let component: LaundryUserHomeComponent;
  let fixture: ComponentFixture<LaundryUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryUserHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

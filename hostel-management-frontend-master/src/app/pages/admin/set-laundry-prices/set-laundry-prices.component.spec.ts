import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLaundryPricesComponent } from './set-laundry-prices.component';

describe('SetLaundryPricesComponent', () => {
  let component: SetLaundryPricesComponent;
  let fixture: ComponentFixture<SetLaundryPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLaundryPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLaundryPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

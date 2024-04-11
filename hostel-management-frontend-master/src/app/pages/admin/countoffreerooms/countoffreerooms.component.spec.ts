import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountoffreeroomsComponent } from './countoffreerooms.component';

describe('CountoffreeroomsComponent', () => {
  let component: CountoffreeroomsComponent;
  let fixture: ComponentFixture<CountoffreeroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountoffreeroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountoffreeroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

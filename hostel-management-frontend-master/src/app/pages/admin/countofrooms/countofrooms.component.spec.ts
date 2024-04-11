import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountofroomsComponent } from './countofrooms.component';

describe('CountofroomsComponent', () => {
  let component: CountofroomsComponent;
  let fixture: ComponentFixture<CountofroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountofroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountofroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

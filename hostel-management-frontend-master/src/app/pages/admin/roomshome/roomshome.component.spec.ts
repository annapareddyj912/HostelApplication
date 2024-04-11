import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomshomeComponent } from './roomshome.component';

describe('RoomshomeComponent', () => {
  let component: RoomshomeComponent;
  let fixture: ComponentFixture<RoomshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

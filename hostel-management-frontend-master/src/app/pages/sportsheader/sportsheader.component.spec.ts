import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsheaderComponent } from './sportsheader.component';

describe('SportsheaderComponent', () => {
  let component: SportsheaderComponent;
  let fixture: ComponentFixture<SportsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

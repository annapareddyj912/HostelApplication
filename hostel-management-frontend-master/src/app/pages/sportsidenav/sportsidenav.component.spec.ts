import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsidenavComponent } from './sportsidenav.component';

describe('SportsidenavComponent', () => {
  let component: SportsidenavComponent;
  let fixture: ComponentFixture<SportsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportequpdateComponent } from './sportequpdate.component';

describe('SportequpdateComponent', () => {
  let component: SportequpdateComponent;
  let fixture: ComponentFixture<SportequpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportequpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportequpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

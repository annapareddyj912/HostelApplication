import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetfeesComponent } from './setfees.component';

describe('SetfeesComponent', () => {
  let component: SetfeesComponent;
  let fixture: ComponentFixture<SetfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetfeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

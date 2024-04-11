import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignroomComponent } from './assignroom.component';

describe('AssignroomComponent', () => {
  let component: AssignroomComponent;
  let fixture: ComponentFixture<AssignroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfeesComponent } from './showfees.component';

describe('ShowfeesComponent', () => {
  let component: ShowfeesComponent;
  let fixture: ComponentFixture<ShowfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

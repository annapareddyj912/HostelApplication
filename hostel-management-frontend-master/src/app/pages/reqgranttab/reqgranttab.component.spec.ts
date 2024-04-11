import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqgranttabComponent } from './reqgranttab.component';

describe('ReqgranttabComponent', () => {
  let component: ReqgranttabComponent;
  let fixture: ComponentFixture<ReqgranttabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqgranttabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqgranttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

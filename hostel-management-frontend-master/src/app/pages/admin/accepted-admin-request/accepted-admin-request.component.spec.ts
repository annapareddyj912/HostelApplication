import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedAdminRequestComponent } from './accepted-admin-request.component';

describe('AcceptedAdminRequestComponent', () => {
  let component: AcceptedAdminRequestComponent;
  let fixture: ComponentFixture<AcceptedAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

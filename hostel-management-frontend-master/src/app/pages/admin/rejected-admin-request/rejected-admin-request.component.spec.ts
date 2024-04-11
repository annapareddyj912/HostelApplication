import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedAdminRequestComponent } from './rejected-admin-request.component';

describe('RejectedAdminRequestComponent', () => {
  let component: RejectedAdminRequestComponent;
  let fixture: ComponentFixture<RejectedAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

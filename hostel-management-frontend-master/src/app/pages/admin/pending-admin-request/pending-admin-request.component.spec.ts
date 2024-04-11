import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAdminRequestComponent } from './pending-admin-request.component';

describe('PendingAdminRequestComponent', () => {
  let component: PendingAdminRequestComponent;
  let fixture: ComponentFixture<PendingAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

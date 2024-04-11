import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminRequestComponent } from './update-admin-request.component';

describe('UpdateAdminRequestComponent', () => {
  let component: UpdateAdminRequestComponent;
  let fixture: ComponentFixture<UpdateAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

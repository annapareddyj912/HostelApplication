import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAdminRequestComponent } from './completed-admin-request.component';

describe('CompletedAdminRequestComponent', () => {
  let component: CompletedAdminRequestComponent;
  let fixture: ComponentFixture<CompletedAdminRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedAdminRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAdminRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryhomeComponent } from './laundryhome.component';

describe('LaundryhomeComponent', () => {
  let component: LaundryhomeComponent;
  let fixture: ComponentFixture<LaundryhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaundryhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

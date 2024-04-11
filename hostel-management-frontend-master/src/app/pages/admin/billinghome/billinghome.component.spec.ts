import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinghomeComponent } from './billinghome.component';

describe('BillinghomeComponent', () => {
  let component: BillinghomeComponent;
  let fixture: ComponentFixture<BillinghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillinghomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

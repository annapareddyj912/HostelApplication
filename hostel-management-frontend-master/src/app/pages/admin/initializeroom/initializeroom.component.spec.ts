import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeroomComponent } from './initializeroom.component';

describe('InitializeroomComponent', () => {
  let component: InitializeroomComponent;
  let fixture: ComponentFixture<InitializeroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitializeroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializeroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

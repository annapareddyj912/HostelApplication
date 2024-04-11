import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeqformComponent } from './addeqform.component';

describe('AddeqformComponent', () => {
  let component: AddeqformComponent;
  let fixture: ComponentFixture<AddeqformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeqformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeqformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

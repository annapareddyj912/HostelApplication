import { TestBed } from '@angular/core/testing';

import { SportuserService } from './sportuser.service';

describe('SportuserService', () => {
  let service: SportuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

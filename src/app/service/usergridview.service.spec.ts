import { TestBed } from '@angular/core/testing';

import { UsergridviewService } from './usergridview.service';

describe('UsergridviewService', () => {
  let service: UsergridviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergridviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

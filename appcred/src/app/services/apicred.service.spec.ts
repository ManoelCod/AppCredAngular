import { TestBed } from '@angular/core/testing';

import { ApicredService } from './apicred.service';

describe('ApicredService', () => {
  let service: ApicredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NannyService } from './nanny.service';

describe('NannyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NannyService = TestBed.get(NannyService);
    expect(service).toBeTruthy();
  });
});

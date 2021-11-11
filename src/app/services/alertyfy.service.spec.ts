import { TestBed } from '@angular/core/testing';

import { AlertyfyService } from './alertyfy.service';

describe('AlertyfyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertyfyService = TestBed.get(AlertyfyService);
    expect(service).toBeTruthy();
  });
});

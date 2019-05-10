import { TestBed } from '@angular/core/testing';

import { LoginservicesService } from './loginservices.service';

describe('LoginservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginservicesService = TestBed.get(LoginservicesService);
    expect(service).toBeTruthy();
  });
});

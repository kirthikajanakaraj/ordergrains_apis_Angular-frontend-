import { TestBed } from '@angular/core/testing';

import { CheckoutservicesService } from './checkoutservices.service';

describe('CheckoutservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckoutservicesService = TestBed.get(CheckoutservicesService);
    expect(service).toBeTruthy();
  });
});

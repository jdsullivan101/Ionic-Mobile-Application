import { TestBed } from '@angular/core/testing';

import { CountrydetailsService } from './countrydetails.service';

describe('CountrydetailsService', () => {
  let service: CountrydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

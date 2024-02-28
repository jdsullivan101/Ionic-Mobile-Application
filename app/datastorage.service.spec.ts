import { TestBed } from '@angular/core/testing';

import { DatastorageService } from './datastorage.service';

describe('DatastorageService', () => {
  let service: DatastorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

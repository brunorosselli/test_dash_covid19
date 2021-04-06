import { TestBed } from '@angular/core/testing';

import { DataBrasilService } from './data-brasil.service';

describe('DataBrasilService', () => {
  let service: DataBrasilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBrasilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

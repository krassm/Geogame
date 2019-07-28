import { TestBed } from '@angular/core/testing';

import { MapdataService } from './mapdata.service';

describe('MapdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapdataService = TestBed.get(MapdataService);
    expect(service).toBeTruthy();
  });
});

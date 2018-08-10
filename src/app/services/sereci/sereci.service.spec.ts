import { TestBed, inject } from '@angular/core/testing';

import { SereciService } from './sereci.service';

describe('SereciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SereciService]
    });
  });

  it('should be created', inject([SereciService], (service: SereciService) => {
    expect(service).toBeTruthy();
  }));
});
